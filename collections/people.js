People = new Meteor.Collection('people');

Meteor.methods({
  addYearMonth: function(set) {
    People.update({}, {$set: set}, false, true);
  }
});