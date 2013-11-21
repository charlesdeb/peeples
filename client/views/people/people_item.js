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