Template.peopleBody.helpers({
  people: function(){
    return People.find({},{sort: {name: 1 }});
  }
});