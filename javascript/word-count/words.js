'use strict';

function Words(input) {

  var words = input.match(/\b[a-z0-9]+\b/gi),
      counts = {};
  
  for(var i=0; i<words.length; i++) {
    var currentWord = words[i].toLowerCase();
    
    if( undefined === counts[currentWord]) {
      counts[currentWord] = 0;
    }
    counts[currentWord] += 1;
  }

  this.count = counts;
}

module.exports = Words;