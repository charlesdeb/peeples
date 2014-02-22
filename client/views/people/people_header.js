Template.peopleHeader.helpers({
  yearMonthCount: function(yearMonth) {
    var query = {};
    var yearMonth_id = Months.findOne({yearMonth: yearMonth})._id
    query['yearMonth_id'] = yearMonth_id;
    return PeopleMonths.find(query).count();
  },
  hideDeleteMonth: function(yearMonth) {
    allYearMonthsArray = _.toArray(allYearMonths().collection.docs);
    firstYearMonth = _.first(allYearMonthsArray).yearMonth;
    lastYearMonth = _.last(allYearMonthsArray).yearMonth;

    if (yearMonth == firstYearMonth || yearMonth == lastYearMonth) {
      // do nothing
    } else {
      return "hide";
    }
  },
  months: function() {
    return allYearMonths();
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
  },
  'click .delete-month': function(e) {
    console.log('delete month!');

    var id = $(e.target).closest('a').data('id');
    console.log('id' + id);
    Months.remove(id);

//    var name = $(e.target).closest('tr').attr('id');
//    bootbox.confirm("Are you sure you want to delete '" + name + "'? You can't undo this.", function(result) {
//      if (result) {
//        var id = $(e.target).closest('a').data('id');
//        Meteor.call('deletePerson', id, function(error, id) {
//          if (error)
//            return alert(error.reason);
//        });
//      }
//    });
//
  },
  'click .earlier-month': function(e) {
    console.log('earlier month!');
  },
  'click .later-month': function(e) {
    console.log('later month!');
  }
});