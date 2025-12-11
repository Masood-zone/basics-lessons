function formatName(name) {
  const firstLetter = name.charAt(0).toUpperCase();
  const remainingLetters = name.slice(1).toLowerCase();
  return firstLetter + remainingLetters;
}

console.log(formatName("aMA"));  // Output: Ama


function calculateAge(yearOfBirth) {
  const currentYear = 2025; 
  const userAge = currentYear - yearOfBirth;
  return userAge;
}

console.log(calculateAge(2000));


function isAdult(age) {
if (age >= 18) {
    return true;
}    
    else {
        return false;
    }
 
}
 console.log(isAdult(20));
    
function getInitials(name) {
  const parts = name.split(" ");   // split into ["Ama", "Kofi"]
  
  const initials = parts.map(word => word[0].toUpperCase()).join("");

  return initials;
}
console.log(getInitials("Awusi Samuel"))
console.log(getInitials("John Doe Junior"))

// // function buildUserProfile(name, yearOfBirth) {
// //   const formattedName = formatName(name);     // FIXED: formatName(), not format()
// //   const userAge = calculateAge(yearOfBirth);
// //   const userAdult = isAdult(userAge);
// //   const initials = getInitials(name);

// //   return { 
// //     formattedName: formattedName,   // FIXED key name
// //     age: userAge,
// //     isAdult: userAdult,
// //     initials: initials              // FIXED: do not name it getInitials
// //   };
// }















 function buildUserProfile(name, yearOfBirth) {
    const formattedName = formatName(name);
    const userAge = calculateAge(yearOfBirth);
    const userAdult = isAdult(userAge);
     const initials = getInitials(name);
 return { 
    name:formattedName,
    age: userAge,
    isAdult: userAdult,
    initials: initials,
 }
}
    const user = buildUserProfile("aMA kOFI", 2000);
    console.log(user);
 

 













































































































































































































































