var Journal = require("./../js/journal.js");

$(function(){
  $("#journal-form").submit(function(event){
    event.preventDefault();

    var titleInput = $("#title").val();
    var entryInput = $("#entry").val();
    var newEntry = new Journal(titleInput, entryInput);



    $("ul#entries").append("<li><span class='single-entry'>" + newEntry.journalTitle + "</span></li>");

    $(".single-entry").last().click(function(){
    $(".show-entries").show();
    $(".show-entries h3").text(newEntry.journalTitle);
    $(".the-entry").text(newEntry.journalEntry);
    $(".number-of-words").text(newEntry.numOfWords());
    $('.time-of-entry').text(newEntry.dateOfEntry);

    });
  });
});
