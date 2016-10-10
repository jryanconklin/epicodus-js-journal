(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$('#journal-form').submit(function(event){
  event.preventDefault();

  var header = new Entry( $('#header').val() );
  header.wordCount();
  header.counter();
  var headerWordCount = header.words;
  var headerVowelsCount = header.vowels;
  var headerConsonantsCount = header.consonants;
  var headerSpecialCount = header.special;
  var body = new Entry( $('#body').val() );
  body.wordCount();
  body.counter();
  var bodyWordCount = body.words;
  var bodyVowelsCount = body.vowels;
  var bodyConsonantsCount = body.consonants;
  var bodySpecialCount = body.special;

  $('#header-results').children().remove();
  $('#body-results').children().remove();

  $('#header-results').append("<li>Your Word Count: " + headerWordCount + "</li>");
  $('#header-results').append("<li>Your Vowel Count: " + headerVowelsCount + "</li>");
  $('#header-results').append("<li>Your Consonant Count: " + headerConsonantsCount + "</li>");
  $('#header-results').append("<li>Your Special Count: " + headerSpecialCount + "</li>");

  $('#body-results').append("<li>Your Word Count: " + bodyWordCount + "</li>");
  $('#body-results').append("<li>Your Vowel Count: " + bodyVowelsCount + "</li>");
  $('#body-results').append("<li>Your Consonant Count: " + bodyConsonantsCount + "</li>");
  $('#body-results').append("<li>Your Special Count: " + bodySpecialCount + "</li>");
});

},{"./../js/journal.js":1}]},{},[2]);
