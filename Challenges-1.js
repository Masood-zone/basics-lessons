/*
Challenge 1 — Clean up a list of product prices
You receive an array of prices, some valid, some invalid.
const prices = [20, -5, 0, 15, -2, 40, 10];

Tasks:
1. Use filter to remove all prices less than or equal to 0.
2. Use map to add 10% tax to each valid price.
3. Log the final array.
*/
const prices = [20, -5, 0, 15, -2, 40, 10];
// 1. Filter out invalid prices
const validPrices = prices.filter((price) => price > 0);
/*
    Called the prices array =
    Picked 20, is 20 > 0 = Yes, keep element
    Picked -5, is -5 > 0 = No, remove element
    Picked 0, is 0 > 0 = No, remove element
    Picked 40, is 40 > 0 = Yes, keep element
    Picked 10, is 10 > 0 = Yes, keep element
*/
// 2. Use map to add 10% tax to each valid price.
// Original price = 100% and Tax = 10% => 100% + 10% = 110% ~ 1.1
const pricesWithTax = validPrices.map((price) => price * 1.1);
console.log(pricesWithTax);

/*
Challenge 2 — Extract usernames
You receive an array of user objects:

const users = [
  { name: "Ama", active: true },
  { name: "Kojo", active: false },
  { name: "Yaw", active: true },
  { name: "Esi", active: false }
];


Tasks:
1. Use filter to keep only active users.
2. Use map to extract only the name property.
3. Print the result.
*/

const users = [
  { name: "Ama", active: true },
  { name: "Kojo", active: false },
  { name: "Yaw", active: true },
  { name: "Esi", active: false },
];

/*
Challenge 3 — Transform scores
Your system logs raw exam scores:
const scores = [45, 80, 92, 30, 55, 100, 70];

Tasks:
1. Filter out scores below 50.
2. Map the remaining scores to objects like this:
{ score: 80, status: "pass" }
3. Display the new array.
*/
const scores = [45, 80, 92, 30, 55, 100, 70];

/*
Challenge 4 — Product labels
You get a batch of product titles that need formatting:
const products = [" rice", "BEANS ", "Oil", "  salt", "Sardine "];


Tasks:
1. Use map to trim whitespace and convert all to lowercase.
2. Filter out any product name longer than 5 characters.
3. Output the clean list.
*/
const products = [" rice", "BEANS ", "Oil", "  salt", "Sardine "];

/*
Challenge 5 — Even number transformer
const numbers = [3, 10, 7, 12, 9, 4, 15, 2];

Tasks:

1. Filter all even numbers.
2. Map them into this format: "Even number: 10"
3. Print the final array.
*/
const numbers = [3, 10, 7, 12, 9, 4, 15, 2];
