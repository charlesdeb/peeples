Handlebars.registerHelper('yearMonths', function()
{
  var answer = allYearMonths();
  if (answer.length > 0) {
    return answer;
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