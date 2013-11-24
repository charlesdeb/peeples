People = new Meteor.Collection('people');

Meteor.methods({
  addNewYearMonth: function(set) {
    People.update({}, {$set: set}, {upsert: false, multi: true}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      }
    });
  }
});