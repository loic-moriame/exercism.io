'use strict';

function Anagram(word) {
  this.word = word;
}


Anagram.prototype.match = function(words) {
  var matches = [];

  for(var i=0; i<words.length; i++) {
    var currentWord = words[i];
    
    if (currentWord.isAnagrameOf(this.word)) {
      matches.push(currentWord);
    };
  }

  return matches;
};

String.prototype.isAnagrameOf = function(word) {
  //console.log(word, this);

  if(word.length !== this.length) {
    return false;
  }

  var wordLetters     = word.split('').sort(),
      anagramLetters  = this.split('').sort();

  for(var i=0; i<wordLetters.length; i++) {
    if(wordLetters[i] !== anagramLetters[i]) {
      return false;
    }
  }

  return true;
};

module.exports = Anagram;
