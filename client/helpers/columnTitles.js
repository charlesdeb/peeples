Handlebars.registerHelper('months', function()    
  {  
  if (People.find().count() > 0 ) {
      firstPerson = People.findOne();
      return _.without(Object.keys(firstPerson), '_id', 'name');
  } else {
      return ['waiting...'];
  }                          
});