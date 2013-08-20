'use strict';

function Anagram(word) {
  this.word = word;
}

function searchAnagram (value, index, array) {
  if(!value.isAnagrameOf(this.word)) {
    array[index] = null;
  }
};

Anagram.prototype.match = function(words) {
  words.forEach(searchAnagram, this);
  words.cleanEmptyValue();
  
  return words;
};


/**
 * Compare to words together to know if they are anagram each of the other
 *
 * @param {String} value The `value` to compare
 * @returns {Boolean} Returns `true` if the `value` is an anagram, else `false`.
 */
String.prototype.isAnagrameOf = function(value) {
  var wordLetters     = value.toUpperCase().split('').sort(),
      anagramLetters  = this.toUpperCase().split('').sort();

  return wordLetters.isEqualTo(anagramLetters);
};

/**
 * Compare to arrays together to know if they are equal
 * Can only compare two one-dimensional array
 *
 * @param {Array} array The `array` to compare
 * @returns {Boolean} Returns `true` if the `array` is equal, else `false`.
 */
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
};

/**
 * Remove the first or all value from an array
 *
 * @param {String} value The `value` to search
 * @param {Boolean} global Search all values (default : false)
 * @returns {Array} Returns the array without the search `value`.
 */
Array.prototype.unset = function(value, global){
    var index   = this.indexOf(value),
        global  = global || false;
 
    while(index > -1) {
      this.splice(index, 1);
      index = global ? this.indexOf(value) : -1;
    }
}

/**
 * Remove all falsy value from an array
 * Values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are all falsey.
 *
 * @param {String} value The `value` to search
 * @param {Boolean} global Search all values (default : false)
 * @returns {Array} Returns the array without the search `value`.
 */
Array.prototype.cleanEmptyValue = function(){
    this.unset(false, true);
    this.unset(null, true);
    this.unset(0, true);    
    this.unset('', true);
    this.unset(undefined, true);
    this.unset(NaN, true);
}


module.exports = Anagram;
