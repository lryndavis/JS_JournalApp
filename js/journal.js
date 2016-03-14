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
