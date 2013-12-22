$(function() {
  $( "#dialog-confirm" ).dialog({
    autoOpen: false,
    resizable: false,
    modal: true,
    close: function(event, ui) {
      alert('boo');
      // do nothing
    },
//    buttons: { 
//      text: "Ok", 
//      click: function() { 
//      }
//    }
    buttons: {
      "Delete all items": function() {
        $( this ).dialog( "close" );
      },
      Cancel: function() {
//        $( this ).dialog( "close" );
      }
    }
  });
});