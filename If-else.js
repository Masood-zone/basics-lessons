// Hour
//If hour is between 6am and 12pm: Good Morning
// If it is between  12pm and 4pm: Good Afternoon
// // Otherwise : Good Evening.
 let hour =  9;
  if (hour >= 7 && hour < 12){
    console.log('Good Morning');
  } else if(hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
  } else {
    console.log ('Good Evening');
  };

// Days
// if the days is between Monday - Thursday: Weekday
// if the days is between friday - saturday: Weekend
// otherwise : Invalid

let day = 'sunday';
if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday') {
  console.log('Weekday');
} else if (day === 'friday' || day === 'saturday') {
  console.log('Weekend');
} else {
  console.log('Invalid');
}

// if grade is between 80 and 100: A
// If grade is between 74 and 79:  B+
// If grade is between 70 and 74: B
// If grade is between 64 and 69: C+
// If grade is between 60 and 64: C
// If grade is between 54 and 59: D+
// If grade is between 50 and 54: D
// If grade is between 44 and 49: E
// If grade is between 40 and 44: F

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter your grade: ", grade => {
  
  if(grade >= 80 && grade <=100  ){
  console.log('A', 'Excellent');
  
  }
   else if (grade >= 75 && grade < 80) {
    console.log('B+', 'Very Good');
  }
    else if ( grade >= 70 && grade <= 74 ) {
      console.log('B', 'Good');

    }  else if ( grade >= 65 && grade <= 69 ) {
      console.log('C+', 'Good');

      }  else if ( grade >= 60 && grade <= 64 ) {
      console.log('C', 'Good');

      }   else if ( grade >= 55 && grade <= 59 ) {
      console.log('D+', 'Pass');

      }    else if ( grade >= 50  && grade <= 54 ) {
      console.log('D', 'Pass');

      }     else if ( grade >= 45  && grade <= 49 ) {
      console.log('E', 'Fail');

      }  else if ( grade >= 0 && grade <= 44  ) {
      console.log('F', 'Fail');
      }    else  {
      console.log('Invalid Number', 'Try Again');
      }
    

  readline.close();
});  




