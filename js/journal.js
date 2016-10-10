function Entry(text) {
  this.text = text;
  this.words = 0;
  this.vowels = 0;
  this.consonants = 0;
  this.special = 0;
}

Entry.prototype.wordCount = function() {
  var text = this.text;
  this.words = text.split(" ").length;
}

Entry.prototype.counter = function() {
  var vowelsArray = ["a", "e", "i", "o", "u"];
  var consonantsArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  var text = this.text;
  var letters = text.split('');

  for (var i = 0; i < letters.length; i++) {
    if (vowelsArray.indexOf(letters[i].toLowerCase()) > -1) {
      this.vowels += 1;
    } else if (consonantsArray.indexOf(letters[i].toLowerCase()) > -1) {
      this.consonants += 1;
    } else {
      this.special += 1;
    }
  }
}

exports.entryModule = Entry;
