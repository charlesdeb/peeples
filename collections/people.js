People = new Meteor.Collection('people');

Meteor.methods({
  addNewYearMonth: function(set) {
    People.update({}, {$set: set}, {upsert: false, multi: true}, function(error) {
      if (error) {
        alert(error.reason);
      }
    });
    // new code for updating the collection of months
    var month = Object.keys(set)[0];
    Months.insert({month: month, show: true});
  },
  addPerson: function(name) {
    if (name.length === 0)
      throw new Meteor.Error(401, "You must supply a name");

    var person = {
      name: name
    };
    People.insert(person);
  },
  deletePerson: function(id) {
    People.remove(id);
  }
});