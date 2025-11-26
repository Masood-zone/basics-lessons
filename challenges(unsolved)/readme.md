# Beginner JavaScript Challenges — README.md

A structured learning pipeline for mastering core JS fundamentals: conditionals, array methods, and object shaping.
Each challenge is scoped for beginners and designed to be executed in VS Code + Node.

---

## How to Use This File

Every challenge describes:
• What you're expected to do
• The concepts you'll be practicing
• Hints to avoid confusion
**No solutions are included here.**
You’ll write your own implementations in a separate JS file.

---

# 📌 **Challenge 1 — Decision Engine (if…else)**

**Scenario:**
You’re building a basic access-control module. The system receives a user’s age and must decide what category the user belongs to.

**Task:**
Write an `if…else` structure that classifies an age into one of the following:

- “child” if under 13
- “teen” if between 13 and 17
- “adult” if 18 and above

**Data to use:**

```js
const age = 16;
```

**Concepts you’re practicing:**

- Boolean logic
- Flow control
- Using comparison operators

**Hints:**

- Evaluate your conditions from narrow → broad to avoid accidental matches.
- Beginners often forget to use `>=` or `<=` where appropriate.

---

# 📌 **Challenge 2 — Filter the Noise (array.filter)**

**Scenario:**
A sensor system streams numeric readings. Some values are invalid and must be removed.

**Task:**
Filter out all values less than 0 or greater than 100.

**Data to use:**

```js
const readings = [50, -3, 120, 75, 0, 95, 150, -20];
```

**Concepts you’re practicing:**

- Using a filter predicate
- Keeping only what matches your logic

**Hints:**

- `filter` never changes the original array; it returns a new one.
- Think of the callback as a “yes/no” gatekeeper.

---

# 📌 **Challenge 3 — Metrics Calculator (array.reduce)**

**Scenario:**
You’re aggregating sales numbers for a dashboard.

**Task:**
Use `reduce()` to calculate the total sum of all sales.

**Data to use:**

```js
const sales = [120, 75, 300, 50, 90];
```

**Concepts you’re practicing:**

- Understanding the accumulator
- How reduce combines values into one outcome

**Hints:**

- Your `accumulator` should start at `0`.
- The callback receives `(acc, value)` each loop.
- The **total** must be the return value of your reduce call.

---

# 📌 **Challenge 4 — Label Transformer (array.map)**

**Scenario:**
A logistics tool wants to attach a unit label to weights in kg.

**Task:**
Transform each number into a string like `"12kg"`.

**Data to use:**

```js
const weights = [12, 5, 30, 7];
```

**Concepts you’re practicing:**

- Mapping values to new structures
- How map always returns an array of equal length

**Hints:**

- You’re not modifying the number; you’re constructing a new value per entry.
- Template literals (`${value}kg`) are easier than string concatenation.

---

# 📌 **Challenge 5 — Inventory Mutations (join, unshift, shift, pop)**

**Scenario:**
You’re managing a store’s item list. You must perform a sequence of operations.

**Task:**

1. Add an item to the **start** of the array
2. Remove the **first** item
3. Remove the **last** item
4. Convert the final array to a comma-separated string

**Data to use:**

```js
let items = ["sugar", "milk", "bread", "oil"];
```

**Concepts you’re practicing:**

- Array mutation vs non-mutation
- Differences between `unshift`, `shift`, and `pop`
- Converting an array into formatted text

**Hints:**

- `unshift()` returns the new array length — not the array.
- `shift()` and `pop()` actually remove items from the array.
- `join()` does **not** change the array, it returns a string.

---

# 📌 **Challenge 6 — Rebuild Structured Objects From Arrays**

**Scenario:**
You receive a list of raw usernames that must be shaped into objects for an API.

**Task:**
Turn each name into an object format like:

```js
{ id: 1, username: "Ama" }
```

IDs should start at 1 and increase sequentially.

**Data to use:**

```js
const names = ["Ama", "Kojo", "Yaw", "Esi"];
```

**Concepts you’re practicing:**

- Mapping primitive values into objects
- Adding computed properties
- Constructing consistent API-friendly structures

**Hints:**

- `map()` gives you the index — perfect for generating IDs.
- Object literals require keys and values; don’t forget the colon.
- Structure matters: `id` must be a number, `username` a string.

---

## Next Steps

Once you complete these challenges, review your solutions and test them in Node.
Consider sharing your implementations with peers and mentors for feedback.
Happy coding! 🚀
