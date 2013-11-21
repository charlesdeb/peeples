Template.peopleHeader.helpers({
  monthCount: function(month) {
    query = {}
    query[month] = true;
    return People.find(query).count();
  }
});