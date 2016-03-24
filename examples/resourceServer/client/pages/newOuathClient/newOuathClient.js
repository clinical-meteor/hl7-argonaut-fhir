var clientCount = new ReactiveVar(null);

Template.newOuathClient.onCreated(function () {
  // get the client count.
  Meteor.call('clientCount', function (err, count) {
    clientCount.set(count);
  });
});


Router.route("/newOuathClient", {
  name: "newOuathClient",
  template: "newOuathClient",
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


Template.newOuathClient.events({
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
      clientName: $('#addClientForm input[name="clientName"]').val(),
      owner: {
        display: Meteor.user().profile.fullName,
        reference: Meteor.userId()
      }
    };

    Meteor.call('addClient', newClient, function () {
      Meteor.call('clientCount', function (err, cnt) {
        clientCount.set(cnt);
      });
    });
  },
  'click button.deleteClient': function () {
    Meteor.call('deleteClient', this._id, function () {
      Meteor.call('clientCount', function (err, cnt) {
        clientCount.set(cnt);
      });
    });
  }
});

Template.newOuathClient.helpers({
  clientEntry: function(){
    return oAuth2Server.collections.clientsCollection.find();
  },
  clientCount: function () {
    return clientCount.get();
  }
});
