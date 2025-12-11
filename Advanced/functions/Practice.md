# **JavaScript Function Challenges (Beginner → Intermediate)**

Advanced-but-simple challenges focused on **Functions**, using **Strings**, **Arrays**, **Numbers**, and **Objects**.

---

## **📌 Overview**

This challenge pack is designed to strengthen your understanding of JavaScript functions.
Each challenge uses simple concepts but requires intermediate-level reasoning to solve cleanly.

---

## **1. String Function Challenges**

### **Challenge 1 — Capitalize Every Word**

Write a function `capitalizeWords(text)` that capitalizes every word in a sentence.

**Input:**
`"learning javascript is fun"`
**Output:**
`"Learning Javascript Is Fun"`

---

### **Challenge 2 — Check for Palindrome**

Write a function `isPalindrome(word)` that returns `true` if the word reads the same backwards.

**Examples:**
`"level" → true`
`"hello" → false`

---

### **Challenge 3 — Reverse Each Word**

Write a function `reverseWords(sentence)` that reverses each word but keeps the sentence order.

**Input:** `"JavaScript is great"`
**Output:** `"tpircSavaJ si taerg"`

---

---

## **2. Array Function Challenges**

### **Challenge 4 — Return Unique Items**

Write a function `uniqueItems(arr)` that removes duplicate values.

**Input:** `[1, 2, 2, 3, 4, 4]`
**Output:** `[1, 2, 3, 4]`

---

### **Challenge 5 — Find the Longest Word**

Write a function `longestWord(words)` that returns the longest word in an array.

**Input:**

```js
["book", "elephant", "sun", "javascript"];
```

**Output:** `"javascript"`

---

### **Challenge 6 — Count Words Beginning With a Letter**

Write a function `countStartsWith(words, letter)` that counts how many words start with a specific letter.

**Example:**
`["cat", "cup", "dog"], "c"` → `2`

---

---

## **3. Number Function Challenges**

### **Challenge 7 — Sum of Digits**

Write a function `sumDigits(num)` that returns the sum of all digits.

**Input:** `456`
**Output:** `15`

---

### **Challenge 8 — Generate Multiplication Table**

Write a function `multiplicationTable(n)` that returns the first 10 multiples of the number.

**Input:** `3`
**Output:** `[3, 6, 9, 12, ...]`

---

### **Challenge 9 — Check Prime Number**

Write a function `isPrime(n)` that returns `true` if the number is prime.

**Examples:**
`7 → true`
`9 → false`

---

---

## **4. Object Function Challenges**

### **Challenge 10 — Extract Names from User Objects**

Write a function `extractNames(users)` that returns an array of only the names.

**Input:**

```js
[
  { name: "Ama", age: 20 },
  { name: "Yaw", age: 16 },
];
```

**Output:**
`["Ama", "Yaw"]`

---

### **Challenge 11 — Filter Adults**

Write a function `filterAdults(people)` that returns only people aged 18 and above.

**Input:**

```js
[
  { name: "Ama", age: 20 },
  { name: "Yaw", age: 16 },
  { name: "Kofi", age: 30 },
];
```

**Output:**

```js
[
  { name: "Ama", age: 20 },
  { name: "Kofi", age: 30 },
];
```

---

### **Challenge 12 — Add fullName to Each User**

Write a function `addFullName(users)` that adds a new property `fullName` based on the first and last names.

**Input:**

```js
[
  { firstName: "John", lastName: "Doe" },
  { firstName: "Mary", lastName: "Smith" },
];
```

**Output:**

```js
[
  { firstName: "John", lastName: "Doe", fullName: "John Doe" },
  { firstName: "Mary", lastName: "Smith", fullName: "Mary Smith" },
];
```

---

---

## **5. Mixed Function Challenges**

### **Challenge 13 — Word Frequency Counter**

Write a function `wordFrequency(text)` that counts how many times each word appears.

**Input:**
`"I love code because I love learning"`

**Output:**

```js
{
  I: 2,
  love: 2,
  code: 1,
  because: 1,
  learning: 1
}
```

---

### **Challenge 14 — Sort Users by Age**

Write a function `sortByAge(users)` that sorts the users in ascending order of age.

---

### **Challenge 15 — Random Password Generator**

Write a function `generatePassword(length)` that returns a random password containing:

- letters
- numbers
- symbols

**Example Output:** `"aB9#k2"`

---

## **🎯 Bonus (Optional)**

Pick any 3 challenges above and solve them using **arrow functions** instead of regular functions.

---

If you want this packaged as a **PDF**, **interactive assignment**, or **test sheet**, I can generate that as well.
