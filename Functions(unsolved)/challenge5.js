/*
📌 Function 5 — "buildUserProfile(name, yearOfBirth)"
Goal
Return an object shaped like this:
{ formattedName: "Ama", age: 19, isAdult: true, initials: "A" }

Requirements

This function must call the previous four functions:
"formatName()"
"calculateAge()"
"isAdult()"
"getInitials()"

Skills Practiced
    Function composition
    Object creation
    Combining multiple returned values into one structure

Hint - Call each helper function once, store the results, and return one object.
*/

function format(name) {
  const firstLetter = name.charAt(0).toUpperCase();
  const remainingLetters = name.slice(1).toLowerCase();
  return firstLetter + remainingLetters;
}

function calculateAge(dateOfBirth) {
  const date = 2025;
  const userAge = date - dateOfBirth;
  return userAge;
}

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function getInitials(userName) {
  const nameParts = userName.split(" ");
  let initials = "";

  for (let i = 0; i < nameParts.length; i++) {
    initials += nameParts[i].charAt(0).toUpperCase();
  }
  return initials;
}

function buildUserProfile(name, yearOfBirth) {
  const formattedName = format(name);
  const userAge = calculateAge(yearOfBirth);
  const userAdult = isAdult(userAge);
  const initials = getInitials(name);

  return {
    name: formattedName,
    age: userAge,
    isAdult: userAdult,
    userInitials: initials,
  };
}

const user = buildUserProfile("Samuel Osei", 2000);
console.log(user);
