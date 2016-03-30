

Template.fhirWelcomePage.events({
  "click #createAnAccount": function (event, template){
    Router.go('/entrySignUp');
  },
  "click #register": function (event, template){
    Router.go('/registerOuathClient');
  }
});


Template.fhirWelcomePage.helpers({
  rendered: function (){

  }
});
