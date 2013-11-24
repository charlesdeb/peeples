allYearMonths = function(){
  if (People.find().count() > 0 ) {
      firstPerson = People.findOne();
      return _.without(Object.keys(firstPerson), '_id', 'name');
  } else {
      return [];
  }  
}

getYear = function(yearMonth) {
  return parseInt(yearMonth.substring(0,2)) + 2000;
}

getMonth = function(yearMonth) {
  return parseInt(yearMonth.substring(2,4));
}

nextYearMonth = function(largestYearMonth) {
  var year = getYear(largestYearMonth);
  var month = getMonth(largestYearMonth);
  if (month === 12) {
    month = 1;
    year+= 1;
  } else {
    month += 1;
  }
  year-= 2000
  return "" + year + pad2(month);
}


function pad2(number) {  
  return (number < 10 ? '0' : '') + number
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