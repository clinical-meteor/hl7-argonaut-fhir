var clientCount = new ReactiveVar(null);

Template.registerOuathClient.onCreated(function () {
  Meteor.call('clientCount', function (err, count) {
    clientCount.set(count);
  });
});


Router.route("/registerOuathClient", {
  name: "registerOuathClient",
  template: "registerOuathClient",
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


Template.registerOuathClient.events({
  'click .changeDefaultClientId': function (){
      Meteor.call('getNewClientId', function(error, result){
        $('input[name="clientId"]').val(result);
      });
  },
  'click .generateNewSecret': function () {
    //console.log('New Secret: ' + Random.secret());

    if (clientCount.get() > 0) {
      // client exists; we want to change it
      Meteor.call('changeSecret', this, Random.secret());
    } else {
      // client doesn't exist; we just want a different initial secret
      $('input[name="clientSecret"]').val(Random.secret());
    }

  },

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
    console.log('deleteClient', this._id);
    Meteor.call('deleteClient', this._id, function () {
      Meteor.call('clientCount', function (err, cnt) {
        clientCount.set(cnt);
      });
    });
  }
});

Template.registerOuathClient.helpers({
  getRandomName: function(){
    Meteor.call('getNewClientId', function(error, result){
      $('input[name="clientId"]').val(result);
    });
  },
  clientEntry: function () {
    return oAuth2Server.collections.clientsCollection.find();
  },
  clientCount: function () {
    return clientCount.get();
  }
});
