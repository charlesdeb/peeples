Template.peopleBody.helpers({
  people: function() {
    return People.find({}, {sort: {name: 1}});
  },
  yearMonthsCount: function() {
    return allYearMonths().length;
  }
});

Template.peopleBody.events({
  'click a#add-person': function(e) {
    var name = $('form#add-person input').val();
    Meteor.call('addPerson', name, function(error, id) {
      if (error)
        return alert(error.reason);

      $('form#add-person input').val("");
    });
  }
});