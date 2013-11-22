Template.peopleItem.helpers({
  monthClass: function(name, month) {
    criteria = {};
    projection = {};
    criteria['name'] = name;
    if (People.findOne(criteria)[month] === true ) {
      return "red";
    } else {
      return "blue";
    }
  }
});

Template.peopleItem.events({
  'click td.grid':function(e) {
    name = $(e.target).data('name');
    month = $(e.target).data('month');
    criteria = {};
    criteria['name'] = name;
    value = People.findOne(criteria)[month];
    set = {};
    set[month] = !value
    People.update(People.findOne(criteria)['_id'], {$set: set} );
    //alert(People.findOne(criteria)['_id']);
  }
});