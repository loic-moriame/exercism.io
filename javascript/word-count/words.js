'use strict';

function Words(input) {

  var words   = input.match(/\w+/gi),
      countWords  = {};
  
  words.reduce(this.countAll, countWords);
  
  this.count = countWords;
}

Words.prototype.countAll = function(countWords, word) {
  var word = word.toLowerCase();

  if( undefined === countWords[word]) {
    countWords[word] = 0;
  }
  countWords[word] = countWords[word] + 1;

  return countWords;
}

module.exports = Words;
