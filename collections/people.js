People = new Meteor.Collection('people');

Meteor.methods({
  addNewYearMonth: function(set) {
//    // old code from when month info was stored in the People table
//    People.update({}, {$set: set}, {upsert: false, multi: true}, function(error) {
//      if (error) {
//        alert(error.reason);
//      }
//    });
    // new code for updating the collection of months
    var yearMonth = Object.keys(set)[0];
    // console.log('in addNewYearMonth, yearMonth: ' + yearMonth);
    Months.insert({yearMonth: yearMonth, show: true});
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
    PeopleMonths.remove({person_id: id});
    People.remove(id);
  }
});