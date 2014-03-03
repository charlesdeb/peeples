taco_peeps = {
  config: {
    visibleMonthCount: 12
  },
  allYearMonths: function() {
    return Months.find({}, {sort: {yearMonth: 1}});
  },
  allVisibleYearMonths: function() {
    return Months.find({show: true}, {sort: {yearMonth: 1}});
  },
  getYear: function(yearMonth) {
    return parseInt(yearMonth.substring(0, 2)) + 2000;
  },
  getMonth: function(yearMonth) {
    return parseInt(yearMonth.substring(2, 4));
  },
  nextYearMonth: function(yearMonth) {
    return this.relativeYearMonth(yearMonth, 1);
  },
  previousYearMonth: function(yearMonth) {
    return this.relativeYearMonth(yearMonth, -1);
  },
  relativeYearMonth: function (yearMonth, monthOffset) {
    var year = this.getYear(yearMonth) - 2000 ;
    var month = this.getMonth(yearMonth);
    var newYearByMonths = ((year * 12) + ( month -1 )) + monthOffset;
    var newYear = Math.floor( newYearByMonths / 12 ) ;
    var newMonth = ( newYearByMonths % 12 ) + 1;
    return "" + newYear + this.pad2(newMonth);
  },
  showYearMonth: function(yearMonth) {
    yearMonthID = Months.findOne({yearMonth: yearMonth})._id
    Months.update(yearMonthID, {$set: {show: true}});
  },
  hideYearMonth: function(yearMonth) {
    yearMonthID = Months.findOne({yearMonth: yearMonth})._id
    Months.update(yearMonthID, {$set: {show: false}});
  },
  addYearMonth: function(yearMonth) {
    Months.insert({yearMonth: yearMonth, show: true });
  },
  pad2: function(number) {
    return (number < 10 ? '0' : '') + number;
  }
};