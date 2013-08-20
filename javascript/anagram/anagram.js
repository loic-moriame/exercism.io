'use strict';

function Anagram(word) {
  this.word = word;
}


Anagram.prototype.match = function(words) {
  
  words.forEach(this.checkWords, this.word);
  words.cleanEmpty();
  
  return words;
};

Anagram.prototype.checkWords = function(word, index, array) {
  if(!word.isAnagrameOf(this.toString())) {
    array[index] = null;
  }
}

String.prototype.isAnagrameOf = function(word) {
  var wordLetters     = word.toUpperCase().split('').sort(),
      anagramLetters  = this.toUpperCase().split('').sort();

  return wordLetters.isEqualTo(anagramLetters);
};

Array.prototype.isEqualTo = function(array) {
  if(!array) {
    return false;
  }

  if(!(array instanceof Array)) {
    return false;
  }

  if(this.length != array.length) {
    return false;
  }
  
  var i = this.length;
  while (i--) {
    if (this[i] !== array[i]) {
      return false;
    }
  }

  return true;
}

Array.prototype.cleanEmpty = function() {
  this.unset(null, true);
  this.unset(undefined, true);

}

Array.prototype.unset = function(value, global) {
  var index   = this.indexOf(value),
      global  = global || false;

  while(index > -1) {
    this.splice(index, 1);
    index = global ? this.indexOf(value) : -1;
  }
}


module.exports = Anagram;
