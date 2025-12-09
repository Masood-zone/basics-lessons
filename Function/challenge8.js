
function getStats(arr) {
  return {
    smallest: Math.min(...arr),
    largest: Math.max(...arr),
    length: arr.length
  };
}

console.log(getStats([10, 3, 45, 2, 99, 23]));
// Output:
// {
//   smallest: 2,
//   largest: 99,
//   length: 6
// }
