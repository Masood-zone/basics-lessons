/*
📌 Function 3 — "isAdult(age)"
Goal

Return:
"true" if age ≥ 18
"false" otherwise
Example: "isAdult(17)" → "false"

Hint - Only one condition matters. Do not overcomplicate the logic.
*/

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isAdult(17));
