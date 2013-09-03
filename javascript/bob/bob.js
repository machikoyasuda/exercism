var Bob = function() {
  function isSilent(phrase) {
    return phrase === '';
  }

  function isShouting(phrase) {
    return phrase.toUpperCase() === phrase;
  }

  function isAsking(phrase) {
    return phrase.slice(-1) === "?";
  }

  this.hey = function(phrase) {
    switch (true) {
      case isSilent(phrase):
        return "Fine, be that way.";
      case isShouting(phrase):
        return "Woah, chill out!";
      case isAsking(phrase):
        return "Sure";
      default:
        return "Whatever.";
    }
  };
}

module.exports = Bob;