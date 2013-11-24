Template.peopleBody.helpers({
  people: function() {
    return People.find({}, {sort: {name: 1}});
  },
  yearMonthsCount: function() {
    return allYearMonths().length;
  }
});

Template.peopleBody.events({
  'click form button': function(e) {
    var name = $(e.target).parent().find('input[name=name]').val();
    Meteor.call('addPerson', name, function(error, id) {
      if (error)
        return alert(error.reason);
    });
  }
});