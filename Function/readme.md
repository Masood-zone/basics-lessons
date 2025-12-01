Beginner JavaScript Function Challenges — README.md

A structured, beginner-friendly guide to understanding how functions work in JavaScript.
These challenges help students build foundational mental models for writing reusable logic, returning values, handling arrays, and generating structured outputs.

Solutions should be written in a separate ".js" file so each learner can test their implementation in VS Code + Node.

---

📌 Challenge Set 1 — Function Basics & Return Values

Challenge 1 — Greeting Engine

Goal:
Create a function "greet(name)" that returns a message like:
""Hello, Ama!""

What you’re practicing:

- Writing basic functions
- Using parameters
- Returning values

Hint:
The function should return, not print. Keep the logic inside clean and simple.

---

Challenge 2 — Square Calculator

Goal:
Write a function "square(num)" that returns the number multiplied by itself.

What you’re practicing:

- Arithmetic inside functions
- Single-purpose, predictable function design

Hint:
A one-line return is enough. Don’t store what you don’t need.

---

Challenge 3 — Even Number Checker

Goal:
Write a function "isEven(n)" that returns "true" if a number is even, otherwise "false".

What you’re practicing:

- Boolean logic
- Using the modulus operator (%) to check conditions

Hint:
Even numbers produce a remainder of "0" when divided by "2".

---

📌 Challenge Set 2 — Functions + Arrays

Challenge 1 — First Item Extractor

Goal:
Create a function "getFirst(arr)" that returns the first item in an array.

What you’re practicing:

- Accessing array elements
- Handling simple input validation

Hint:
Think about what should happen when the array is empty.

---

Challenge 2 — Sum Array Function

Goal:
Write a function "sumArray(arr)" that loops through an array and returns the total of all numbers.

What you’re practicing:

- Looping
- Managing a running total inside a function

Hint:
Initialize your sum variable inside the function.

---

Challenge 3 — Filter Above 50

Goal:
Write a function "filterAbove50(arr)" that returns only numbers above 50.

What you’re practicing:

- Using "filter()" inside a custom function
- Returning a new array based on a condition

Hint:
Return the filtered result directly. Don’t log inside the function.

---

📌 Challenge Set 3 — Functions Returning Objects & Multiple Values

Challenge 1 — User Object Builder

Goal:
Create a function "createUser(name, age)" that returns an object shaped like:

{ name: "Esi", age: 22 }

What you’re practicing:

- Constructing and returning objects
- Passing multiple parameters

Hint:
Your object keys must match exactly. Consistency matters.

---

Challenge 2 — Stats Generator

Goal:
Write a function "getStats(arr)" that returns an object containing:

- the smallest number
- the largest number
- the array length

What you’re practicing:

- Aggregation logic
- Using built-in helpers like "Math.min()", "Math.max()", and the spread operator

Hint:
"Math.min(...arr)" works only if the array has numbers and you spread them correctly.

---

Challenge 3 — Text Formatter

Goal:
Create a function "formatUser(name, role)" that returns a formatted string like:

"User: Ama | Role: Admin"

What you’re practicing:

- Template literals
- Formatting structured text

Hint:
Use backticks (`) — they allow cleaner variable embedding.

---

✔️ Next Steps

Once these are mastered, move into:

- Higher-order functions
- Closures
- Composing multiple small functions
- Modular design thinking

This builds the foundation for writing scalable JavaScript in real-world projects.