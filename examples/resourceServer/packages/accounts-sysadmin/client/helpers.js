
Template.registerHelper("isSysadmin", function (argument){
  if (Meteor.userId()) {
    if (Roles.userIsInRole(Meteor.userId(), ['sysadmin'])) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
