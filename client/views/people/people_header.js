Template.peopleHeader.helpers({
  yearMonthCount: function(yearMonth) {
    query = {}
    query[yearMonth] = true;
    return People.find(query).count();
  }
});

Template.peopleHeader.events({
   'click #add-month a':function(e) {
     e.preventDefault();
     largestYearMonth = allYearMonths().pop();
     newYearMonth = nextYearMonth(largestYearMonth);
     set = {};
     set[newYearMonth] = false;
     //alert('about to call addYearMonth, set = ' + set.toString());
     Meteor.call('addNewYearMonth', set);
   }
});