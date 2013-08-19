module.exports = function Bob() {
  'use strict';

  this.hey = function(sentence) {

    if (sentence === "") {
      return "Fine. Be that way!";
    }

    if (sentence.toUpperCase() === sentence) {
      return "Woah, chill out!";
    }

    if (sentence.substr(-1) === "?") {
      return "Sure.";
    }

    return "Whatever.";
  }
};