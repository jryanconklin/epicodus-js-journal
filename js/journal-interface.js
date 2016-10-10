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

  $('#header-results').append("<li>Your Word Count: " + headerWordCount + "</li>");
  $('#header-results').append("<li>Your Vowel Count: " + headerVowelsCount + "</li>");
  $('#header-results').append("<li>Your Consonant Count: " + headerConsonantsCount + "</li>");
  $('#header-results').append("<li>Your Special Count: " + headerSpecialCount + "</li>");

  $('#body-results').append("<li>Your Word Count: " + bodyWordCount + "</li>");
  $('#body-results').append("<li>Your Vowel Count: " + bodyVowelsCount + "</li>");
  $('#body-results').append("<li>Your Consonant Count: " + bodyConsonantsCount + "</li>");
  $('#body-results').append("<li>Your Special Count: " + bodySpecialCount + "</li>");
});
