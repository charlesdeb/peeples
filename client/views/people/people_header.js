Template.peopleHeader.helpers({
  yearMonthCount: function(yearMonth) {
    query = {};
    var yearMonth_id = Months.findOne({yearMonth: yearMonth})._id
    query['yearMonth_id'] = yearMonth_id;
    return PeopleMonths.find(query).count();
  },
  hideHideLink: function(yearMonth) {
    return "hide";
  },
  hideShowLink: function() {
    if (!hiddenMonths())
      return "hide";
  },
  months: function() {
    return Months.find();
  }
});

hiddenMonths = function() {
  if (Months.find({show: false}).count() > 0)
    return true;
};

Template.peopleHeader.events({
  'click #add-month a': function(e) {
    e.preventDefault();
    // largestYearMonth = allYearMonths().pop();
    largestYearMonth = _.toArray(allYearMonths().collection.docs).pop().yearMonth;
    if (largestYearMonth === undefined) {
      today = new Date();
      largestYearMonth = (today.getFullYear() + "").substring(2, 4) + (pad2(today.getMonth() + 1));
    } else {
      newYearMonth = nextYearMonth(largestYearMonth);
    }
    // console.log('largestYearMonth: ' + largestYearMonth);
    newYearMonth = nextYearMonth(largestYearMonth);
    set = {};
    set[newYearMonth] = false;
    //alert('about to call addYearMonth, set = ' + set.toString());
    Meteor.call('addNewYearMonth', set);
  }
});