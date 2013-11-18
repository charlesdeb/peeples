Template.peopleBody.helpers({ 
  people: function(){
    return People.find();
  }
});