(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
}

Journal.prototype.fullEntry = function() {
  return this.journalTitle + " " + this.journalEntry;
};

module.exports = Journal;

},{}],2:[function(require,module,exports){
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



    });
  });
});

},{"./../js/journal.js":1}]},{},[2]);
