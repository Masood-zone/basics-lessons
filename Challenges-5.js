/*
Challenge 5 — Even number transformer
const numbers = [3, 10, 7, 12, 9, 4, 15, 2];

Tasks:

1. Filter all even numbers.
2. Map them into this format: "Even number: 10"
3. Print the final array.
*/
const numbers = [3, 10, 7, 12, 9, 4, 15, 2];
// 1. Filter all even numbers.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// 2. Map them into this format: "Even number: 10"
const displayEvenNumbers = evenNumbers.map(
  (number) => `Even number: ${number}`
);
console.log(displayEvenNumbers);
