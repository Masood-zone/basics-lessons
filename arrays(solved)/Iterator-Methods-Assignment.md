# JavaScript Iterator Method Challenges — Assignment

This assignment introduces you to JavaScript’s most common iterator methods. Follow each challenge carefully and write your answers in separate JS files. Use `console.log()` to show your results.

Recommended file naming:
- `foreach-challenges.js`
- `map-challenges.js`
- `filter-challenges.js`
- `find-challenges.js`
- `every-some-challenges.js`
- `reduce-challenges.js`
- `bonus-iterator-tasks.js` (optional)

Run with Node from this folder:
```bash
node foreach-challenges.js
```

---

## 1. forEach()

### Challenge 1 — Greet Each Name
Given:
```js
const names = ["Ama", "Kwesi", "Yaw", "Abena"];
```
Use `forEach()` to print:
```
Hello, Ama
Hello, Kwesi
Hello, Yaw
Hello, Abena
```

### Challenge 2 — Add Currency Symbol
Given:
```js
const prices = [10, 20, 50];
```
Use `forEach()` to display each price as:
```
GHC10
GHC20
GHC50
```

---

## 2. map()

### Challenge 1 — Convert to Uppercase
Given:
```js
const items = ["book", "pen", "bag"];
```
Return:
```js
["BOOK", "PEN", "BAG"]
```

### Challenge 2 — Double the Numbers
Given:
```js
const nums = [1, 2, 3, 4];
```
Return a new array with each number doubled.

---

## 3. filter()

### Challenge 1 — Get Only Adults
Given:
```js
const ages = [12, 18, 25, 15, 30];
```
Keep only ages 18 and above.

### Challenge 2 — Extract Even Numbers
Given:
```js
const nums = [3, 6, 7, 10, 13, 14];
```
Return only the even numbers.

---

## 4. find() and findIndex()

### Challenge 1 — Find the First Long Word
Given:
```js
const words = ["hi", "hello", "fantastic", "yo"];
```
Return the first word with more than 5 characters using `find()`.

### Challenge 2 — Find Index of Score Above 90
Given:
```js
const scores = [45, 72, 88, 95, 60];
```
Use `findIndex()` to return the index of the first score above 90.

---

## 5. every() and some()

### Challenge 1 — Are All Numbers Positive?
Given:
```js
const numbers = [3, 5, 7, 10];
```
Check using `every()` whether all numbers are greater than 0.

### Challenge 2 — Is There Any Failure?
Given:
```js
const results = [45, 80, 32, 90];
```
Use `some()` to check if any score is below 50.

---

## 6. reduce() and reduceRight()

### Challenge 1 — Sum All Numbers
Given:
```js
const payments = [50, 100, 20, 30];
```
Use `reduce()` to calculate the total.

### Challenge 2 — Build a Sentence Backwards
Given:
```js
const words = ["learning", "am", "I"];
```
Use `reduceRight()` to return:
```
"I am learning"
```

---

## Bonus Task (Optional)

Using the array below:
```js
const data = [3, 8, 12, 5, 2, 30];
```
Perform any three of the following (your choice):
- Get the sum of even numbers
- Create a new array with each number tripled
- Check if all numbers are above 0
- Find the first number greater than 10

Be creative. Print your results clearly.

---

## Submission Tips
- Put each section’s solutions into the suggested files or any clear structure you prefer.
- Add brief `console.log()` labels so outputs are easy to read.
- Keep your code clean and consistent.
