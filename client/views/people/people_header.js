Template.peopleHeader.helpers({
  yearMonthCount: function(yearMonth) {
    query = {}
    query[yearMonth] = true;
    return People.find(query).count();
  }
});

Template.peopleHeader.events({
   'click a':function(e) {
     e.preventDefault();
     lastYearMonth = '10';
     set = {};
     set[lastYearMonth] = false;
     Meteor.call('addYearMonth', set);
   }
});