Template.peopleHeader.helpers({
  monthCount: function(month) {
    if (month == 'Jan 2013') {
      return People.find({'Jan 2013': true}).count()
    }
    else if(month == 'Feb 2013') {
      return People.find({'Feb 2013': true}).count()
    }
  }
});