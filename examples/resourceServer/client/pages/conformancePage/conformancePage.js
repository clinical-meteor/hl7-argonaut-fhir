
Session.setDefault('conformanceStatement', {});

Router.route('/conformance', {
  name: "conformanceRoute",
  template: "conformancePage"
});


Template.conformancePage.events({
  "click #event": function (event, template){

  }
});


Template.conformancePage.onRendered( function (){
  HTTP.get(Meteor.absoluteUrl() + "/metadata", function (error, result){
    Session.set("conformanceStatement", result.data);
  });
});

Template.conformancePage.helpers({
  getConformanceData: function (){
    return EJSON.stringify(Session.get("conformanceStatement"), {indent: 2});
  }
});
