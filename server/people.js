Meteor.methods({
  addNewMonth: function(set) {
    People.update({},{$set : set},false,true);
  }
});