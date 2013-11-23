People = new Meteor.Collection('people');

Meteor.methods({
  addMonth: function(set) {
    People.update({}, {$set: set}, false, true);
  }
});