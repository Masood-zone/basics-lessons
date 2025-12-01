//Write a function "sumArray(arr)" that loops through an array and returns the total of all
// let numbers = [60, 90, 80]; // This here is a list of strings, remember we are dealing with numbers

// function sumArray(arr) {
//   const total = arr.reduce((acc, number) => {
//     return acc + number;
//   }, 0);
//   return total;
// }

// const result = sumArray(numbers);
// console.log(result);

// Method - 2

// Method - 1
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([60, 90, 80]));
