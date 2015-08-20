Template.mainPage.events({

});

Template.mainPage.helpers({
  getRootUrl: function () {
    return Meteor.absoluteUrl();
  },
  getFirstId: function () {
    var firstPatient = Patients.findOne();
    return firstPatient._id;
  }
});
