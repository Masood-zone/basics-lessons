/*
📌 Function 1 — "formatName(name)"

Goal

Return the name with:
first letter capitalized
all remaining letters lowercase

Example: ""aMA"" → ""Ama""

*/

function format(name) {
  const firstLetter = name.charAt(0).toUpperCase();
  const remainingLetters = name.slice(1).toLowerCase();
  return firstLetter + remainingLetters;
}

console.log(format("aMA"));
console.log(format("sAMUEL"));
