/*
Array Iterator Methods:
1. For Each Methods 
*/
let data = [1, 2, 3, 4, 5];
let sum = 0;
// With one arguments
data.forEach((number) => {
  return (sum += number);
});
// console.log(sum); // Sum = 15
// With three arguments - Element, Position (index), and the Array itself
data.forEach((number, index, array) => {
  array[index] = number + 1;
});
// console.log(data); // Result = [ 2, 3, 4, 5, 6 ]

// 2. Mapping through arrays with the map()
let a = [1, 2, 3];
let result = a.map((number) => number * number);
// The map method does this
// It calls the element 1 and then 1 * 1 = 1
// It calls the element 2 and then 2 * 2 = 4
// It calls the element 2 and then 3 * 3 = 9
// After that it will the result in an array = [1, 4, 9]
// console.log(result);

// 3. Find and Find Index methods
let b = [1, 2, 3, 4, 5];
// The find() method - Returns the first element that matches the condition
let evenumbers = b.find((number) => number % 2 === 0);
// console.log(evenumbers);
// The findIndex() method - Returns the postion of the element that matches it's condition
let oddNumbers = b.findIndex((number) => number % 3 === 0);
// console.log(oddNumbers);

// 4. Every and Some Methods
let c = [2, 4, 6];
// The every() method - Returns True/False based on the condition
let areAllEvenNumbers = c.every((number) => number % 2 === 0);
// console.log(areAllEvenNumbers); // Returns a True/False for either case

// The some() method - Returns True/False if and only if there is at least one element that matches the condition
let areAllOddNumber = c.some((number) => number % 2 === 0);
console.log(areAllOddNumber);

// 5. Reduce and Reduce Right Methods
let d = [1, 2, 4, 5, 6];
// reduce() method -
let total = d.reduce((acc, number) => acc + number, 0);
// reduceRight() method -
let total2 = d.reduceRight((acc, number) => acc + number, 0);
console.log(total2);
