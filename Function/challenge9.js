/*
Goal: Create a function "formatUser(name, role)" that returns a formatted string like:

"User: Ama | Role: Admin"

What you’re practicing:
Template literals
Formatting structured text
Hint: Use backticks (`) — they allow cleaner variable embedding.
*/

function formatUser(name, role) {
  return `User: ${name} | Role: ${role}`;
}

const result = formatUser("Ama", "Admin");
console.log(result);
