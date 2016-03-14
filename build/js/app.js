(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
  this.dateOfEntry = moment().calendar();
}

Journal.prototype.fullEntry = function() {
  return this.journalTitle + " " + this.journalEntry;
};


Journal.prototype.numOfWords = function(journalEntry) {
  var inputEntry = this.journalEntry;
  var inputArr = inputEntry.split(" ");
  var numWords = inputArr.length;
  return numWords;
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
    $(".number-of-words").text(newEntry.numOfWords());
    $('.time-of-entry').text(newEntry.dateOfEntry);

    });
  });
});

var apiKey = "379107d28ee00f8ff3073b943d3f5a64";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response);
    });
  });
});

},{"./../js/journal.js":1}]},{},[2]);
