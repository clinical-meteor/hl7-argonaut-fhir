Meteor.publish("OAuth2Clients", function (argument){
  return OAuth2Clients.find();
});
