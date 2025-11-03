// Variables - let, const, var
// var age;
// age = 152; // Terminate with ; - always

// Variable naming rules
// Pascal usecase
// Camel usecase
// let ageOfPeople;
// let age_of_people;

// AgeOfPeople = 20;
// ageOfPeople = 21;
// age_of_people = 24;
// console.log(age_of_people);

// Variable Datatypes
// Number
let AgeOfPeople = 20;
let years = 3;
let realAge = AgeOfPeople + years; // -> 23
// Boolean - True and False
let isEligibleToVote = realAge < AgeOfPeople; // Is 23 Less than 20? -> False
let isEligibleToVote1 = realAge > AgeOfPeople; // Is 23 Greater than 20? -> True
let isEligibleToVote2 = realAge <= AgeOfPeople; // Is 23 Less than or Equal to 20? -> False
let isEligibleToVote3 = realAge >= AgeOfPeople; // Is 23 Greater than or Equal to 20? -> True
let isEligibleToVote4 = realAge === AgeOfPeople; // Is 23 equal to 20? -> False

// String
let country = "Ghanaian";
// Concatenation - adds strings and variable names and even datatypes together
let nameOfMentor = "Masood is a Mentor, he is " + realAge + isEligibleToVote;

// Operations in JavaScript
let operations = "+, -, <, >, <=, >=, ===, ++, --";

AgeOfPeople--; // This means that AgeOfPeople = AgeOfPeople - 1;
AgeOfPeople++; // This means that AgeOfPeople = AgeOfPeople + 1;

console.log(AgeOfPeople);
