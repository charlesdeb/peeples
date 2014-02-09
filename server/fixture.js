if (People.find().count() === 0 ) {
  People.insert({
    name: 'Dave Wilson',
    '1312': true,
    '1401': true,
    '1402': true,
    '1403': false
  });
  People.insert({
    name: 'Pam Wilson',
    '1401': true,
    '1402': true,
    '1403': false
  });
  People.insert({
    name: 'Charles de Bueger',
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
