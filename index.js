module.exports = {
  Phrase: Phrase,
  TranslatedPhrase: TranslatedPhrase
}

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  if (this.search(/\s+/g) === -1){return false}
  else {return this.search(/\s+/g) === this.search(/^\s+$/g)} ;
}

Array.prototype.last = function() {
  return this.slice(-1)[0];
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.letters = function letters(string) {
    return Array.from(string).filter(c => c.match(/[a-z]/i)).join("");
  }

  this.processor = function(string) {
    return this.letters(string).toLowerCase();
  }

  this.processedContent = function processedContent(string) {
    return this.processor(string);
  }

  this.palindrome = function palindrome() {
    if (this.letters(this.content)) {
      return this.processedContent(this.content) === this.processedContent(this.content).reverse();
    } else {
      return false;
    }
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.palindrome = function palindrome() {
    return this.processedContent(this.translation) === this.processedContent(this.translation).reverse();
  }
}

TranslatedPhrase.prototype = new Phrase();
