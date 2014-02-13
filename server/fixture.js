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

if (Months.find().count() === 0) {
  yearMonths = ['1312', '1401', '1402', '1403'];
  yearMonths = _.map(yearMonths, function(yearMonth) {
    return {yearMonth: yearMonth, show: true}
  })
  //  console.log(yearMonths);
  _.each(yearMonths, function(yearMonth) {
    Months.insert(yearMonth)
  });
}

if (PeopleMonths.find().count() === 0) {
  // get month IDs
  var month_1312_id = Months.findOne({yearMonth: '1312'})._id;
  var month_1401_id = Months.findOne({yearMonth: '1401'})._id;
  var month_1402_id = Months.findOne({yearMonth: '1402'})._id;
  var month_1403_id = Months.findOne({yearMonth: '1403'})._id;

  var wallace_id = People.findOne({name: 'Wallace Footrot'})._id;
  var dawg_id = People.findOne({name: 'Dawg'})._id;
  var cheeky_hobson_id = People.findOne({name: 'Cheeky Hobson'})._id;

  // do wallace
  PeopleMonths.insert({person_id: wallace_id, yearMonth_id: month_1312_id});
  PeopleMonths.insert({person_id: wallace_id, yearMonth_id: month_1401_id});
  PeopleMonths.insert({person_id: wallace_id, yearMonth_id: month_1402_id});

  // do dawg
  PeopleMonths.insert({person_id: dawg_id, yearMonth_id: month_1401_id});
  PeopleMonths.insert({person_id: dawg_id, yearMonth_id: month_1402_id});

  // do cheeky
  PeopleMonths.insert({person_id: cheeky_hobson_id, yearMonth_id: month_1401_id});
  PeopleMonths.insert({person_id: cheeky_hobson_id, yearMonth_id: month_1403_id});
}
