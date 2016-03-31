

Router.route('/stats', {
  name: "statsPage",
  template: "statsPage"
});

Template.statsPage.events({
  "click #event": function (event, template){

  }
});

Template.statsPage.helpers({
  getSearchTypeCount: function (){
    if (this && this.Patients) {
      return this.Patients.count[ "search-type" ];
    } else {
      return "";
    }
  },
  stats: function (){
    return SiteStatistics.findOne({_id: "configuration"});
  }
});
