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
