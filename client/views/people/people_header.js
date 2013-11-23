Template.peopleHeader.helpers({
  monthCount: function(month) {
    query = {}
    query[month] = true;
    return People.find(query).count();
  }
});

Template.peopleHeader.events({
   'click a':function(e) {
     e.preventDefault();
     lastMonth = '10';
     set = {};
     set[lastMonth] = false;
     Meteor.call('addMonth', set);
     //alert('add month');
   }
});