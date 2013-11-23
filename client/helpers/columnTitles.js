Handlebars.registerHelper('months', function()
{
  Meteor.call('allMonths', function(error, result) {
    if (error) {
      alert(error.reason);
    } else {
      answer = result;
    }
  });
  return answer;
  //if (People.find().count() > 0 ) {
  //    firstPerson = People.findOne();
  //    return _.without(Object.keys(firstPerson), '_id', 'name');
  //} else {
  //    return ['waiting...'];
  //}                          
});