function Journal(journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
}

Journal.prototype.fullEntry = function() {
  return this.journalTitle + " " + this.journalEntry;
};

module.exports = Journal;
