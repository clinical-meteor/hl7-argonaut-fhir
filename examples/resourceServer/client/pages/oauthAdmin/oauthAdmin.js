

Router.route("/oauthAdmin", {
  name: "oauthAdminRoute",
  template: "oauthAdmin",
  yieldTemplates: {
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'sidebar': {
      to: 'westPanel'
    },
    'userSearchInput': {
      to: 'globalInput'
    },
    'navbarHeader': {
      to: 'header'
    }
  }
});

Template.oauthAdmin.events({
  /**
   * CONFIG FLOW - Step C1.1
   * Create an authorized client.
   */
  'click #addOauthClientButton': function () {
    var newClient = {
      active: true,
      clientId: $('#addClientForm input[name="clientId"]').val(),
      redirectUri: $('#addClientForm input[name="redirectUri"]').val(),
      clientSecret: $('#addClientForm input[name="clientSecret"]').val(),
      clientName: $('#addClientForm input[name="clientName"]').val()
    };

    Meteor.call('addClient', newClient, function () {
      Meteor.call('clientCount', function (err, cnt) {
        clientCount.set(cnt);
      });
    });
  },
  'click button.deleteAllClients': function () {
    Meteor.call('deleteAllClients', function () {
      Meteor.call('clientCount', function (err, cnt) {
        clientCount.set(cnt);
      });
    });
  }
});

Template.oauthAdmin.helpers({
  clientList: function () {
    return oAuth2Server.collections.clientsCollection.find();
  },
  authCodes: function () {
    return oAuth2Server.collections.authCode.find({});
  },
  refreshTokens: function () {
    return oAuth2Server.collections.refreshToken.find({});
  }
});
