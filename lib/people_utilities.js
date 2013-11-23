allMonths = function(){
  if (People.find().count() > 0 ) {
      firstPerson = People.findOne();
      return _.without(Object.keys(firstPerson), '_id', 'name');
  } else {
      return [];
  }  
}

// couldn't get this to work properly - although it's probably the best way to do it
//Meteor.methods({
//  allMonths: function() {
//    if (People.find().count() > 0 ) {
//      firstPerson = People.findOne();
//      return _.without(Object.keys(firstPerson), '_id', 'name');
//    } else {
//      return [];
//    }  
//  } 
//});