Template.peopleHeader.helpers({
  yearMonthCount: function(yearMonth) {
    var query = {};
    var yearMonth_id = Months.findOne({yearMonth: yearMonth})._id;
    query['yearMonth_id'] = yearMonth_id;
    return PeopleMonths.find(query).count();
  },
  visibleYearMonths: function() {
    return taco_peeps.allVisibleYearMonths();
  }
});

hiddenMonths = function() {
  if (Months.find({show: false}).count() > 0)
    return true;
};

Template.peopleHeader.events({
  'click .earlier-month': function(e) {
    e.preventDefault();
    var latestVisibleYearMonth = taco_peeps.allVisibleYearMonths().fetch().pop().yearMonth;
    var earliestVisibleYearMonth = taco_peeps.allVisibleYearMonths().fetch()[0].yearMonth;
    var previousVisibleYearMonth = taco_peeps.previousYearMonth(earliestVisibleYearMonth);
    if (Months.find({yearMonth: previousVisibleYearMonth}).count() === 0) {
      taco_peeps.addYearMonth(previousVisibleYearMonth);
    }
    taco_peeps.showYearMonth(previousVisibleYearMonth);
    taco_peeps.hideYearMonth(latestVisibleYearMonth);
  },
  'click .later-month': function(e) {
    e.preventDefault();
    var latestVisibleYearMonth = taco_peeps.allVisibleYearMonths().fetch().pop().yearMonth;
    var earliestVisibleYearMonth = taco_peeps.allVisibleYearMonths().fetch()[0].yearMonth;
//    console.log('latestVisibleYearMonth: ' + latestVisibleYearMonth);
//    console.log('earliestVisibleYearMonth: ' + earliestVisibleYearMonth);
    var nextVisibleYearMonth = taco_peeps.nextYearMonth(latestVisibleYearMonth);
//    console.log('nextVisibleMonth: ' + nextVisibleYearMonth);
    if (Months.find({yearMonth: nextVisibleYearMonth}).count() === 0) {
      taco_peeps.addYearMonth(nextVisibleYearMonth);
    }
    taco_peeps.showYearMonth(nextVisibleYearMonth);
    taco_peeps.hideYearMonth(earliestVisibleYearMonth);
  }
});