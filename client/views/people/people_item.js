Template.peopleItem.helpers({
  monthClass: function(name, yearMonth) {
    criteria = {};
    projection = {};
    criteria['name'] = name;
    if (People.findOne(criteria) && People.findOne(criteria)[yearMonth] === true ) {
      return " grey";
    }
  },
  hideDelete: function(){
    //alert(_.size(People.find().collection.docs));
    if (_.size(People.find().collection.docs) <= 0 ) {
      return "hide";
    }
  }
});

Template.peopleItem.events({
  'click td.grid': function(e) {
    var name = $(e.target).data('name');
    yearMonth = $(e.target).data('yearmonth');
    criteria = {};
    criteria['name'] = name;
    value = People.findOne(criteria)[yearMonth];
    set = {};
    set[yearMonth] = !value
    People.update(People.findOne(criteria)['_id'], {$set: set});
    //alert(People.findOne(criteria)['_id']);
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