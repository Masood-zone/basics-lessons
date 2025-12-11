// Challenge 1 - every() returns either true/false
const numbers = [3, 5, 7, 10];

const isEveryNumberHigh = numbers.every((number) => number > 0);

console.log(isEveryNumberHigh); // True

// Challenge 2 -some()
const results = [45, 80, 32, 90];

const isScoreBelow50 = results.some((number) => number < 50);

console.log(isScoreBelow50); // True some scores are less than 50 (45, 32)
