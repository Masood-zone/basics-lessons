// Challenge 1
const payments = [50, 100, 20, 30];

const total = payments.reduce((acc, number) => acc + number, 0);

console.log(`Total: ${total}`); // Total: 200

const totalRight = payments.reduceRight((acc, number) => acc + number, 0);

console.log(`Total (from right): ${totalRight}`);

// Challenge 2
const words = ["learning", "am", "I"];

const correctWords = words.reduceRight((acc, word) => acc + " " + word, "");

console.log(correctWords);
