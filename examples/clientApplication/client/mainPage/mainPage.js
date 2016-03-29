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

    return user.services.MeteorOAuth2Server.id;
  },
  getUserData: function () {
    console.log('getUserData', getUserData.get());
    return EJSON.stringify(getUserData.get(), {indent: 2});
  }
});

Template.mainPage.events({
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
      } // if
    } // function
});

/**
 * Determine if a user originates from an oauth2 login.
 * @param user
 * @returns {*}
 */
function isOAuth2User(user) {
  return user && user.services && user.services.MeteorOAuth2Server;
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

  return user.services.MeteorOAuth2Server.accessToken;
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
