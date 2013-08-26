(function() {
  'use strict';

  function Anagram(word) {
    this.word = word;
  }

  Anagram.prototype.match = function(words) {
    words.forEach(this.checkWords, this.word);
    return words.filter(this.filterEmptyValue);
  };

  Anagram.prototype.checkWords = function(word, index, array) {
    if(!word.isAnagrameOf(this.toString())) {
      array[index] = null;
    }
  }

  Anagram.prototype.filterEmptyValue = function(word) {
    return word !== null;
  }

  String.prototype.isAnagrameOf = function(word) {
    var word1 = this.toUpperCase().split('').sort().join(''),
        word2 = word.toUpperCase().split('').sort().join('');

    return word1 === word2;
  };

  module.exports = Anagram;

})();
