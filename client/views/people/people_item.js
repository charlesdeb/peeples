Template.peopleItem.helpers({
  monthClass: function(name, yearMonth) {
    criteria = {};
    criteria['person_id'] = People.findOne({name: name})._id;
    criteria['yearMonth_id'] = Months.findOne({yearMonth: yearMonth})._id;
    if (PeopleMonths.findOne(criteria)) {
      return " grey";
    }
  },
  hideDelete: function() {
    if (_.size(People.find().collection.docs) <= 0) {
      return "hide";
    }
  }
});

Template.peopleItem.events({
  'click td.grid': function(e) {
    var personId = $(e.target).data('person-id');
    var yearMonthId = $(e.target).data('yearmonth-id');

    criteria = {};
    criteria['person_id'] = personId;
    criteria['yearMonth_id'] = yearMonthId;

    if (PeopleMonths.findOne(criteria)) {
      // person was already here that month - so delete
      PeopleMonths.remove(PeopleMonths.findOne(criteria)._id);
    } else {
      // person was not already here that month - so insert
      set = criteria;
      PeopleMonths.insert(set);
    }
  },
  'click a#delete-person': function(e) {
    var name = $(e.target).closest('tr').attr('id');
    bootbox.confirm("Are you sure you want to delete '" + name + "'? You can't undo this.", function(result) {
      if (result) {
        var id = $(e.target).closest('a').data('id');
        Meteor.call('deletePerson', id, function(error, id) {
          if (error)
            return alert(error.reason);
        });
      }
    });
  }
});