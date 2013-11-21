if (People.find().count() === 0 ) {
  People.insert({
    name: 'George Jetson',
    '1301': true,
    '1302': true,
    '1303': false
  });
  People.insert({
    name: 'Peter Pan',
    '1301': true,
    '1302': true,
    '1303': false
  });
  People.insert({
    name: 'Willy Wonka',
    '1301': true,
    '1302': false,
    '1303': true
  });
}
