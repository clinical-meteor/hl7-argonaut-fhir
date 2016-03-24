Template.main.onRendered(function(){
  $(document).on('DOMNodeInserted', function(e) {
    var setCount = 0;
    setCount += prePopulateValues(e, 'configure-login-service-dialog-clientId', 'clientApplication');
    setCount += prePopulateValues(e, 'configure-login-service-dialog-secret', '12345');
    setCount += prePopulateValues(e, 'configure-login-service-dialog-baseUrl', 'http://localhost:3100');
    setCount += prePopulateValues(e, 'configure-login-service-dialog-loginUrl', 'http://localhost:3100');

    // a hacky way to make the meteor configure interface make the save button
    // enabled. it only enables if it detects key up events in the input fields.
    if (setCount) {
      $('#configure-login-service-dialog-clientId').trigger('keyup', 17);
    }
  });
});

/*
    All the code here is to demonstrate the two-way communication between the resource server and
    this client application. None of the code here is important when implementing the client on
    you site.
 */

var getUserIdResult = new ReactiveVar(null);

Template.main.helpers({
    getUserAccessToken: function() {
        return getUserAccessToken();
    },

    getUserIdResult: function() {
        return getUserIdResult.get();
    },

    getUserOAuth2Id: function() {
        var user = Meteor.user();

        if (!isOAuth2User(user)) {
            return;
        }

        return user.services.MeteorOAuth2Server.id;
    }
});

Template.main.events({
    /**
     * Wipe out all the configured services.
     */
    'click button.resetServiceConfiguration': function() {
        Meteor.call('resetServiceConfiguration');
    },

    /**
     * Perform a server-to-server request to get the user id on the resource server. This action exists
     * just to demonstrate the steps in the oauth2 process. The oauth2 client package does this for you
     * when logging in.
     */
    'click button.testLocalTokens': function() {
        if (getUserAccessToken()) {
            Meteor.call('getUserId', function(err, result) {
                console.log(result);
                // set the userId.
                getUserIdResult.set(result.data);
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
    return user
        && user.services
        && user.services.MeteorOAuth2Server
        ;
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

function prePopulateValues(e, id, value) {
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
