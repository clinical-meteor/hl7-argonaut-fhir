

Meteor.methods({
  fetchMetadata: function (url){
    return HTTP.get(url);
  }
});
