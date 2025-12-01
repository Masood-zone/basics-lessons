/*
Goal
Return the user’s age based on the current year. You may choose any current year (e.g., "2024" or "2025").

Example: "calculateAge(2005)" → "19" (if using 2024)
Hint - Age = current year − yearOfBirth Keep it simple.
*/

function calculateAge(dateOfBirth) {
  const date = 2025;
  const userAge = date - dateOfBirth;
  return `You are ${userAge} years old.`;
}

console.log(calculateAge(2000));
