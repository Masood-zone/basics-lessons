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
