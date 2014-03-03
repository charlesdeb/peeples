Template.peopleBody.helpers({
  people: function() {
    return People.find({}, {sort: {name: 1}});
  },
  yearMonthsCount: function() {
//    console.log('Object.keys(taco_peeps.allVisibleYearMonths().collection._docs._map).length: ' + Object.keys(taco_peeps.allVisibleYearMonths().collection._docs._map).length);
//    return taco_peeps.allYearMonths().length;
//    return Object.keys(taco_peeps.allVisibleYearMonths().collection._docs._map).length
    return Months.find().count();
  },
  visibleYearMonthsCount: function() {
    return Months.find({show: true}).count();
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