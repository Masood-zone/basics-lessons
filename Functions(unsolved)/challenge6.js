function formatName(name) {
    const firstName = name.charAt(0).toUpperCase()
const secondName = name.charslice(1).toLowerCase()
return firstLetter + remainingLetters;
}
console.log("aMA");


function calculateAge(yearOfBirth) {
  const date = 2025
  const yearOfBirth = 2000
  const userAge = date - yearOfBirth
    return userAge;
}
 console.log(userAge);


function isAdult(Age) {
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


 function buildUserProfile(name, yearOfBirth) {
    const formattedName = format(name);
    const userAge = calculateAge(yearOfBirth);
    const userAdult = isAdult(userAge);
     const initials = getInitials(name);
 return { 
    name:formattedName,
    age: userAge,
    isAdult: userAdult,
    getInitials: initials,
 }
}
const  user = buildUserProfile("Samuel Awusi")
console.log(user)
 

 













































































































































































































































