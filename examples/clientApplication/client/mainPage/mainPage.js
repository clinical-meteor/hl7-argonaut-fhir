Template.mainPage.onRendered(function () {
  $(document).on('DOMNodeInserted', function (e) {
    var setCount = 0;
    setCount += prePopulateValues(e, 'configure-login-service-dialog-clientId',
      'clientApplication');
    setCount += prePopulateValues(e, 'configure-login-service-dialog-secret', '12345');
    setCount += prePopulateValues(e, 'configure-login-service-dialog-baseUrl',
      'http://localhost:3100');
    setCount += prePopulateValues(e, 'configure-login-service-dialog-loginUrl',
      'http://localhost:3100/oauth');

    // a hacky way to make the meteor configure interface make the save button
    // enabled. it only enables if it detects key up events in the input fields.
    if (setCount) {
      $('#configure-login-service-dialog-clientId').trigger('keyup', 17);
    }
  });
});



 Router.route('/', {
   name: "mainPage",
   template: "mainPage"
 });

var getUserIdResult = new ReactiveVar(null);
var getUserData = new ReactiveVar(null);

var getPatientData = new ReactiveVar(null);

Template.mainPage.helpers({
  getUserAccessToken: function () {
    return getUserAccessToken();
  },

  getUserIdResult: function () {
    return getUserIdResult.get();
  },

  getUserOAuth2Id: function () {
    var user = Meteor.user();

    if (!isOAuth2User(user)) {
      return;
    }

    return user.services.OAuth2Server.id;
  },
  getUserData: function () {
    console.log('getUserData', getUserData.get());
    return EJSON.stringify(getUserData.get(), {indent: 2});
  },
  getPatientData: function () {
    console.log('getPatientData', getPatientData.get());
    return EJSON.stringify(getPatientData.get(), {indent: 2});
  }
});

Template.mainPage.events({
  'click #autoscanBtn': function (){
    console.log('GET ' + $('#autoscanUrlInput').val());
    Meteor.call("fetchMetadata", $('#autoscanUrlInput').val() + "/metadata", function (error, result){
      if (error){
        console.log("error", error);
      }
      if (result){
         //console.log('metadata...', result.data);

         if (result.data) {
           result.data.rest.forEach(function (rest){
             //console.log('rest', rest);
             if (rest.mode === "server") {
               if (rest && rest.security && rest.security.extension && rest.security.extension[0]) {
                 var tokenUrl = "";
                 var authorizeUrl = "";

                 rest.security.extension[0].extension.forEach(function(data){
                   //console.log('extension', data);
                   if (data && data.url === "token") {
                     console.log('token', data.valueUri);
                     tokenUrl = data.valueUri;
                   }
                   if (data && data.url === "authorize") {
                     console.log('authorize', data.valueUri);
                     authorizeUrl = data.valueUri;
                   }
                 });

                 ServiceConfiguration.configurations.insert({
                   service: 'OAuth2Server',
                   clientId: $('#autoscanClientNameInput').val(),
                   scope: ['user/*.read'], // whatever scope the resource owner supports. By default, ['email'] will be used.
                   //scope: [], // whatever scope the resource owner supports. By default, ['email'] will be used.
                   secret: $('#autoscanSecretInput').val(),
                   baseUrl: $('#autoscanUrlInput').val(),
                   loginUrl: authorizeUrl,
                   loginStyle: "popup"
                 });

               }
             }
           });
         }
      }
    });
  },

  /**
   * Wipe out all the configured services.
   */
  'click #resetServiceConfiguration': function () {
    console.log('click #resetServiceConfiguration');
    Meteor.call('resetServiceConfiguration');
  },

  /**
   * Perform a server-to-server request to get the user id on the resource server. This action exists
   * just to demonstrate the steps in the oauth2 process. The oauth2 client package does this for you
   * when logging in.
   */
  'click button.testLocalTokens': function () {
      if (getUserAccessToken()) {
        Meteor.call('getUserId', function (err, userId) {
          console.log('getUserId', userId);
          // set the userId.
          getUserIdResult.set(userId.data);

          Meteor.call('getUserData', userId.data, function (err, userData) {
            console.log('getUserData', userData);
            // set the userId.
            getUserData.set(userData.data);
          });
        });
      }
    },


  'click button.getPatientData': function () {
    console.log('click button.getPatientData');

      if (getUserAccessToken()) {
        var parameters = {
          params: {
            access_token: getUserAccessToken()
          }
        };
        if ($('#patientNameInput').val().length > 0) {
          parameters.params.name = $('#patientNameInput').val();
        }
        if ($('#patientGivenInput').val().length > 0) {
          parameters.params.given = $('#patientGivenInput').val();
        }
        if ($('#patientFamilyInput').val().length > 0) {
          parameters.params.family = $('#patientFamilyInput').val();
        }
        if ($('#patientGenderInput').val().length > 0) {
          parameters.params.gender = $('#patientGenderInput').val();
        }
        if ($('#patientIdentifierInput').val().length > 0) {
          parameters.params.identifier = $('#patientIdentifierInput').val();
        }
        if ($('#patientBirthdateInput').val().length > 0) {
          parameters.params.birthdate = $('#patientBirthdateInput').val();
        }

        console.log('parameters', parameters);

        HTTP.call('get', 'http://localhost:3100/fhir/Patient', parameters, function(error, result){
          if (result) {
            console.log('getPatientData', result);
            getPatientData.set(result.data);
          }
          if (error) {
            console.error(error);
          }
        });
      }
    }
});

/**
 * Determine if a user originates from an oauth2 login.
 * @param user
 * @returns {*}
 */
function isOAuth2User(user) {
  return user && user.services && user.services.OAuth2Server;
}

/**
 * Get the user access token if it exists.
 * @returns {*}
 */
function getUserAccessToken() {
  var user = Meteor.user();

  if (!isOAuth2User(user)) {
    return;
  }

  return user.services.OAuth2Server.accessToken;
}

function prePopulateValues (e, id, value) {
  var el = $(e.target).find('#' + id);
  if (!el.length) {
    return false;
  }

  if (!el.val()) {
    el.val(value);
    return true;
  }

  return false;
}
