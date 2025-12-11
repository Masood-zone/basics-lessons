// Challenge 1 - find()
const words = ["hi", "hello", "yourss", "fantastic"];

const moreThanFiveChars = words.find((word) => word.length > 5);
// console.log(moreThanFiveChars);

// Challenge 1 - findIndex()
const moreThanFive = words.findIndex((word) => word.length > 5);
// console.log(moreThanFive);

// Challenge 2 - findIndex() - Index wise
const scores = [45, 72, 88, 95, 60];

const scoreAbove90 = scores.findIndex((number) => number > 90);
console.log(scoreAbove90);
