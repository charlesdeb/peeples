allYearMonths = function() {
  return Months.find({}, {sort: {yearMonth: 1}});
};

getYear = function(yearMonth) {
  return parseInt(yearMonth.substring(0, 2)) + 2000;
};

getMonth = function(yearMonth) {
  return parseInt(yearMonth.substring(2, 4));
};

nextYearMonth = function(largestYearMonth) {
  var year = getYear(largestYearMonth);
  var month = getMonth(largestYearMonth);
  if (month === 12) {
    month = 1;
    year += 1;
  } else {
    month += 1;
  }
  year -= 2000
  return "" + year + pad2(month);
};


pad2 = function(number) {
  return (number < 10 ? '0' : '') + number
}