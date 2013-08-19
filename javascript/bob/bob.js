module.exports = function Bob() {
  'use strict';

  this.hey = function(sentence) {

    // saying anything
    if (sentence === "") {
      return "Fine. Be that way!";
    }

    // yell him
    if (sentence.toUpperCase() === sentence) {
      return "Woah, chill out!";
    }

    // it's a question
    if (sentence[sentence.length - 1] === "?") {
      return "Sure.";
    }

    // all other case
    return "Whatever.";
  }
};