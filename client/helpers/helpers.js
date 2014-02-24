Handlebars.registerHelper('visibleYearMonths', function()
{
  var result = taco_peeps.allVisibleYearMonths();
  if (result.count() > 0) {
    return result;
  } else {
    return ['querying database...'];
  }
});

Handlebars.registerHelper('formatMonth', function(yearMonth)
{
  if (yearMonth > 0) {
  var year = parseInt(yearMonth.substring(0,2)) + 2000;
  var month = parseInt(yearMonth.substring(2,4));
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[month - 1] + " " + year;
  } else {
    return "";
  }
});