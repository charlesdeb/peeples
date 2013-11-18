if (People.find().count() === 0 ) {
  People.insert({
    name: 'George Jetson',
    'Jan 2013': true,
    'Feb 2013': true
  });
  People.insert({
    name: 'Peter Pan',
    'Jan 2013': true,
    'Feb 2013': false
  });
  People.insert({
    name: 'Willy Wonka',
    'Jan 2013': true,
    'Feb 2013': false
  });
}
