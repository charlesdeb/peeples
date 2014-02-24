if (People.find().count() === 0) {
  People.insert({
    name: 'Wallace Footrot' //,
//    '1312': true,
//    '1401': true,
//    '1402': true,
//    '1403': false
  });
  People.insert({
    name: 'Dawg' //,
//    '1401': true,
//    '1402': true,
//    '1403': false
  });
  People.insert({
    name: 'Cheeky Hobson' //,
//    '1401': true,
//    '1402': false,
//    '1403': true
  });
}

var currentMonth = new Date().getMonth() + 1;
var currentFullYear = new Date().getFullYear();
var yearMonth = "" + (currentFullYear - 2000) + pad2(currentMonth);
// console.log('yearMonth: ' + yearMonth);

var yearMonths = [yearMonth];
while (yearMonths.length < 15) {
  yearMonth = taco_peeps.nextYearMonth(yearMonth);
  yearMonths.push(yearMonth);
}

if (Months.find().count() === 0) {
  yearMonths = _.map(yearMonths, function(yearMonth) {
    return {yearMonth: yearMonth, show: true}
  })
  console.log(yearMonths);
  console.log(yearMonths[12]);
  yearMonths[12].show = false;
  yearMonths[13].show = false;
  yearMonths[14].show = false;

  _.each(yearMonths, function(yearMonth) {
    Months.insert(yearMonth)
  });
}
// console.log('yearMonth: ' + yearMonth);

if (PeopleMonths.find().count() === 0) {
// get month IDs
  var last_month_id = Months.findOne({yearMonth: yearMonth})._id;

// get person IDs
  var wallace_id = People.findOne({name: 'Wallace Footrot'})._id;
  var dawg_id = People.findOne({name: 'Dawg'})._id;
  var cheeky_hobson_id = People.findOne({name: 'Cheeky Hobson'})._id;
//
// do wallace
  PeopleMonths.insert({person_id: wallace_id, yearMonth_id: last_month_id});
}