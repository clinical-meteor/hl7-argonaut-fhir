SiteStatistics = new Mongo.Collection("SiteStatistics");
SiteStatistics.allow({
  insert: function (){
    return true;
  },
  update: function (){
    return true;
  },
  remove: function (){
    return true;
  }
});


// SiteStatistics = new Mongo.Collection("SiteStatistics");
// SiteStatistics.allow({
//   insert: function (){
//     return true;
//   },
//   update: function (){
//     return true;
//   },
//   remove: function (){
//     return true;
//   }
// });
