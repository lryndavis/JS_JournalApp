var Journal = require("./../js/journal.js");

$(function(){
  $("#journal-form").submit(function(event){
    event.preventDefault();

    var titleInput = $("#title").val();
    var entryInput = $("#entry").val();
    var newEntry = new Journal(titleInput, entryInput);

  });
  
});
