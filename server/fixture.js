if (People.find().count() === 0 ) {
  People.insert({
    name: 'Wallace Footrot',
    '1312': true,
    '1401': true,
    '1402': true,
    '1403': false
  });
  People.insert({
    name: 'Dawg',
    '1401': true,
    '1402': true,
    '1403': false
  });
  People.insert({
    name: 'Cheeky Hobson',
    '1401': true,
    '1402': false,
    '1403': true
  });
}

if (Months.find().count() === 0 ) {
  months = ['1312','1401','1402','1403'];
  months = _.map(months, function(month){ return {month: month, show: true}})
//  console.log(months);
  _.each(months, function(month){ Months.insert(month)});
}
