function Bob() {
  'use strict';

  function isEmpty(string) {
    return "" === string;
  }

  function isYelling(string) {
    return string === string.toUpperCase();
  }

  function isQuestion(string) {
    return "?" === string.substr(-1);
  }

  this.hey = function(sentence) {

    if (isEmpty(sentence)) {
      return "Fine. Be that way!";
    }

    if (isYelling(sentence)) {
      return "Woah, chill out!";
    }

    if (isQuestion(sentence)) {
      return "Sure.";
    }

    return "Whatever.";
  }
};

module.exports = Bob;