/*
📌 Function 4 — "getInitials(name)"

Goal
Return the initials of a full name.
Example: ""Ama Kofi"" → ""AK""

Skills Practiced
    Splitting strings
    Picking specific characters
    Mapping values to a new output

Hint - Split by spaces and grab the first letter of each part.
*/

function getInitials(userName) {
  const nameParts = userName.split(" ");
  let initials = "";

  for (let i = 0; i < nameParts.length; i++) {
    // Operation
    initials += nameParts[i].charAt(0).toUpperCase();
  }
  return initials;
}

/*
Breakdown:
1. The function divided the name parts into separate array elements
2.
3.
4.
*/
