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
     if (largestYearMonth === undefined) {
       today = new Date();
       largestYearMonth = (today.getFullYear() + "").substring(2,4) + (pad2(today.getMonth() + 1 ))
     } else {
       newYearMonth = nextYearMonth(largestYearMonth);
     }
     alert(largestYearMonth);
     newYearMonth = nextYearMonth(largestYearMonth);
     set = {};
     set[newYearMonth] = false;
     //alert('about to call addYearMonth, set = ' + set.toString());
     Meteor.call('addNewYearMonth', set);
   }
});