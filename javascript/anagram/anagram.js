(function() {
  'use strict';

  function Anagram(word) {
    this.word = word;
  }

  Anagram.prototype.match = function(words) {
    return words.filter(this.filterAnagrams, this);
  };

  Anagram.prototype.filterAnagrams = function(word) {
    return this.word.sortLetters() === word.sortLetters();
  }

  String.prototype.sortLetters = function() {
    return this.toUpperCase().split('').sort().join('');
  }

  module.exports = Anagram;

})();
