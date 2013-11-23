Meteor.methods({
  addNewYearMonth: function(set) {
    People.update({},{$set : set},false,true);
  }
});