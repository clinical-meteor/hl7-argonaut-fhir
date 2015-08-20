Patients = new Mongo.Collection('patients');
Patients.allow({
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


if (Meteor.isServer){
  Meteor.publish("patients", function (){
    return Patients.find();
  });
}


if (Meteor.isClient){
  Meteor.subscribe("patients");
}
