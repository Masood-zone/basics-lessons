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
// 1.  Use map to trim whitespace and convert all to lowercase.
const formattedProducts = products.map((product) =>
  product.trim().toLowerCase()
);

// 2. Filter out any product name longer than 5 characters (letters).
const filteredProductNames = formattedProducts.filter(
  (product) => product.length < 5
);

console.log(filteredProductNames);
