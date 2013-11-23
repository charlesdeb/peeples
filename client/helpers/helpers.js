Handlebars.registerHelper('months', function()
{
  var answer = allMonths();
  if (answer.length > 0) {
    return answer;
  } else {
    return ['querying database...'];
  }
});