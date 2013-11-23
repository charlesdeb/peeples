Template.peopleItem.helpers({
  monthClass: function(name, yearMonth) {
    criteria = {};
    projection = {};
    criteria['name'] = name;
    if (People.findOne(criteria)[yearMonth] === true ) {
      return "red";
    } else {
      return "blue";
    }
  }
});

Template.peopleItem.events({
  'click td.grid':function(e) {
    name = $(e.target).data('name');
    yearMonth = $(e.target).data('yearmonth');
    criteria = {};
    criteria['name'] = name;
    value = People.findOne(criteria)[yearMonth];
    set = {};
    set[yearMonth] = !value
    People.update(People.findOne(criteria)['_id'], {$set: set} );
    //alert(People.findOne(criteria)['_id']);
  }
});