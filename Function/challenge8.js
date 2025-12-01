/* 
Goal: Write a function "getStats(arr)" that returns an object containing:
    The smallest number
    The largest number
    The array length
Using built-in helpers like "Math.min()", "Math.max()", and the spread operator (...)
*/
// Method 1 -
function getStats(arr) {
  const largestNumber = Math.max(...arr);
  const smallestNumber = Math.min(...arr);
  const arrayLength = arr.length;

  return {
    large: largestNumber,
    small: smallestNumber,
    length: arrayLength,
  };
}

const sumArray = [10, 60, 45, 80, 30, 90];
const result = getStats(sumArray);

console.log(result);
