// Write your package code here!
// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (process.env.INITIALIZE) {
    console.log('Initializing Sysadmin...');
    Meteor.call("initializeSysadmin");
  }
});


Meteor.methods({
  initializeSysadmin: function(){
    if ((Meteor.users.find({username: "sysadmin"}).count() === 0) || (process.env.ADDITIONAL)) {
      var sysadminId = Accounts.createUser({
        username: 'sysadmin',
        password: 'sysadmin',
        email: 'sysadmin@localhost',
        profile: {
          fullName: 'System Administrator',
          role: 'Sysadmin'
        }
      });
      console.info('Sysadmin created: ' + sysadminId);
    } else {
      console.log('Looks like there are already a Sysadmin account.  Skipping.');
    }
  }
});
