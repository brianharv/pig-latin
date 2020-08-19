function pigLatin(word) {
  word = word.toLowerCase()
  const vowels = ["a", "e", "i", "o", "u"];

  if (word[0].match(/[aeiou]/g)) {
    return word + "way";
  } else {
    for (let character of word) {
      if (vowels.includes(character)) {
        vowelIndex = word.indexOf(character);
        break;
      }
    }
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
  }
}

function sentenceSend(sentence) {
    let array = sentence.split(" ");
    let newArray = [];
    array.forEach(function(element) {
    newArray.push(pigLatin(element));
    });
    return newArray.join(" ") + ".";
}

// Interface
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
  let sentence = $("input#userInput").val();
  alert(sentenceSend(sentence));
  $(".form-output").text(sentenceSend(sentence));
  });
}); 

/* 
For words beginning with a vowel, add "way" to the end.

For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

For words beginning with "y", treat "y" as a consonant.

string,concat("way")

if else (word)


*/