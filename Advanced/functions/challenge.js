/*
1. String Function Challenges

Challenge 1 — Capitalize Every Word
Write a function capitalizeWords(text) that capitalizes every word in a sentence.

Input: "learning javascript is fun" 

Output: "Learning Javascript Is Fun"
*/

function capitalizeWords(text) {
  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
}

const sentence = "learning javascript is fun";
// ["learning", "javascript" ,"is", "fun"]
// Get first letter (l), make it capital (L), earning
// ... continues
console.log(capitalizeWords(sentence));
