// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content

  this.processor = function(string) {
    return string.toLowerCase();
}

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();

frase = new TranslatedPhrase("recognize", "reconocer");
console.log(frase.palindrome());
