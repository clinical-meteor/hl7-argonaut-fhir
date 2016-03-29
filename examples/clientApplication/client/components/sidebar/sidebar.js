


// Template.sidebar.onRendered = function() {
//   this.find('#sidebarMenuContents a')._uihooks = {
//     insertElement: function(node, next) {
//       $(node)
//         .hide()
//         .insertBefore(next)
//         .fadeIn();
//     },
//     removeElement: function(node) {
//       $(node).fadeOut(function() {
//         this.remove();
//       });
//     }
//   };
// };


Template.sidebar.events({
  'click #themingLink': function (){
    Router.go('/theming');
  },
  'click #scanFacebookExportBtn': function (){
    Meteor.call("scanFacebookFiles");
  },
  'click #dropClinicalImpressions': function (){
    console.log("dropClinicalImpressions");
    Meteor.call("dropClinicalImpressions");
  },
  'click #homeLink': function (){
    Router.go('/');
  },
  'click #generateSampleData': function (){
    console.log("generateSampleData");
    Meteor.call("generateSampleData");
  },
  "click #usernameLink": function (){
    if (!Meteor.user()) {
      Router.go('/entrySignIn');
    }
  },
  "click #protocolLibraryLink": function (){
    Router.go('/protocols');
  },
  'click #logoutButton': function () {
    Meteor.logout(function (){
      Router.go('/entrySignIn');
    });


    // if we are on a private list, we'll need to go to a public one
    var current = Router.current();
    if (current.route.name === 'checklistPage' && current.data().userId) {
      Router.go('checklistPage', Lists.findOne({userId: {$exists: false}}));
    }
    if (Session.get("appWidth") < 1024) {
      Session.set('useHorizontalFences', false);
    }

  },
  'click #newListButton': function() {
    Router.go('checklistPage', Lists.createNew());
  }
});

Template.sidebar.helpers({
  getUsername: function () {
    if (Meteor.user()) {
      if (Meteor.user().emails[0]) {
        return Meteor.user().emails[0].address;
      } else {
        return "---";
      }
    } else {
      return "Sign In";
    }
  },
  getConnectionStatus: function () {
    return Meteor.status().status;
  },
  email: function() {
    return Meteor.user().emails[0].address;
  },
  lists: function() {
    return Lists.find({userId: Meteor.userId()});
  },
  activeListClass: function() {
    var current = Router.current();
    if (current.route.name === 'checklistPage' && current.params._id === this._id) {
      return 'active';
    }
  }
});
