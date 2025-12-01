Ultimate Beginner JavaScript Function Challenge — README.md

Welcome to the Ultimate Beginner Function Challenge.
This module is designed as a practical, entry-level exercise to help new developers build real functional thinking in JavaScript.
You’ll write small, clean, focused functions and then combine them into a mini “utility toolkit”.

This challenge mirrors real-world development patterns:
simple units → combined into a larger, reusable structure.

---

🔥 Challenge Overview

You will create five functions, each performing a specific task.
All functions must live in the same ".js" file.
Only return values; do not print inside your functions.

The final function will combine the results of the other four.

---

📌 Function 1 — "formatName(name)"

Goal

Return the name with:

- first letter capitalized
- all remaining letters lowercase

Example:
""aMA"" → ""Ama""

Skills Practiced

- Basic string manipulation
- Return values
- Writing clean, predictable functions

Hint

You only need two string operations:
one for grabbing the first character, one for the rest.

---

📌 Function 2 — "calculateAge(yearOfBirth)"

Goal

Return the user’s age based on the current year.
You may choose any current year (e.g., "2024" or "2025").

Example:
"calculateAge(2005)" → "19" (if using 2024)

Skills Practiced

- Math operations
- Using parameters
- Returning numbers

Hint

Age = current year − yearOfBirth
Keep it simple.

---

📌 Function 3 — "isAdult(age)"

Goal

Return:

- "true" if age ≥ 18
- "false" otherwise

Example:
"isAdult(17)" → "false"

Skills Practiced

- Boolean logic
- Conditional branching ("if...else")

Hint

Only one condition matters.
Do not overcomplicate the logic.

---

📌 Function 4 — "getInitials(name)"

Goal

Return the initials of a full name.

Example:
""Ama Kofi"" → ""AK""

Skills Practiced

- Splitting strings
- Picking specific characters
- Mapping values to a new output

Hint

Split by spaces and grab the first letter of each part.

---

📌 Function 5 — "buildUserProfile(name, yearOfBirth)"

Goal

Return an object shaped like this:

{
formattedName: "Ama",
age: 19,
isAdult: true,
initials: "A"
}

Requirements

This function must call the previous four functions:

- "formatName()"
- "calculateAge()"
- "isAdult()"
- "getInitials()"

Skills Practiced

- Function composition
- Object creation
- Combining multiple returned values into one structure

Hint

Call each helper function once, store the results, and return one object.

---

✔️ Submission Expectations

- Write all five functions in one ".js" file
- Only return values; do not use "console.log()" inside the functions
- Keep each function clean and single-purpose
- The final function should be a neat wrapper combining everything

---

🚀 Next Steps

After completing this challenge, you’ll be ready for:

- Functions with default parameters
- Higher-order functions
- Arrow functions
- Module patterns
- Passing functions into other functions

This challenge gives you a solid base for real-world JavaScript development.
