People = new Meteor.Collection('people');

Meteor.methods({
  addNewYearMonth: function(set) {
    People.update({}, {$set: set}, {upsert: false, multi: true}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      }
    });
  },
  addPerson: function(name) {
    if (name.length == 0)
      throw new Meteor.Error(401, "You must supply a name");

    var person = {
      name: name
    };
    People.insert(person);
  }
});