(function() {
  'use strict';

  function Anagram(word) {
    this.word = word;
  }

  function sortLetters(word) {
    return word.toUpperCase().split('').sort().join('');
  }

  Anagram.prototype.match = function(words) {
    return words.filter(this.filterAnagrams, this);
  };

  Anagram.prototype.filterAnagrams = function(word) {
    if(this.word === word) {
      return false;
    }
    
    return sortLetters(this.word) === sortLetters(word);
  }

  module.exports = Anagram;
})();
