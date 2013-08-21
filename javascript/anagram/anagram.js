(function() {
  'use strict';

  function Anagram(word) {
    this.word = word;
  }

  Anagram.prototype.match = function(words) {
    words.forEach(this.checkWords, this.word);
    words.unset(null, true);
    
    return words;
  };

  Anagram.prototype.checkWords = function(word, index, array) {
    if(!word.isAnagrameOf(this.toString())) {
      array[index] = null;
    }
  }

  String.prototype.isAnagrameOf = function(word) {
    var word1 = this.toUpperCase().split('').sort().join(''),
        word2 = word.toUpperCase().split('').sort().join('');

    return word1 === word2;
  };

  Array.prototype.unset = function(value, global) {
    var index   = this.indexOf(value),
        global  = global || false;

    while(index > -1) {
      this.splice(index, 1);
      index = global ? this.indexOf(value) : -1;
    }
  }

  module.exports = Anagram;

})();
