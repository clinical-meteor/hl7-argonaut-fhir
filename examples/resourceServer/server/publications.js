// Meteor.publish("OAuth2Clients", function (){
//   // if the user is a sysadmin, return all the clients
//   if (Roles.userIsInRole(this.userId, ['sysadmin'])) {
//     return OAuth2Clients.find();
//   } else {
//     // otherwise, onlly return a user's own clients
//     return OAuth2Clients.find({'owner.reference': this.userId});
//   }
// });
