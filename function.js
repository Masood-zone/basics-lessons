// Scoping - Global Scope, Local Scope
// Global Scope
let c;
const greet = (a, b, y) => {
  c = a + b;
  console.log(c, "is my name", y);
};
greet("sammy ", "awusi ", "and a student of gree?");
console.log(c);

// Local scope
// const pay = (x, y) => {
//   const z = x + y; // Variable z is a local scope
//   console.log(`It will be equal to ${z}`);
// };
// pay(1, 2);
// console.log(z);

// //Default function
// function identity(name) {
//   console.log("Hello ", name);
// }
// identity("AWUSI"); // Call back Function

// // Arrow function
// const sample = () => {
//   let a = 6,
//     b = 9;
//   c = b - a;
//   console.log(c, "is an odd number");
// };
// sample();

// const greetings = (a, b, y) => {
//   const c = a + b;
//   console.log(c, y);
// };
// greetings("Good ", "Morning ", "today is friday");

// const Ahiati = (a, b, y) => {
//   const c = a + b;
//   console.log(c, y);
// };
// Ahiati(
//   "press 1, to talk about your remaining credit ",
//   "or press 2, to talk about your remaining credit."
// );

// // variables.
// let a = "press 1, to talk about your remaining credit ";
// let b = "or press 2, to talk about your regular call charges";
// console.log(a + b);
