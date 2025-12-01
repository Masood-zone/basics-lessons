
function sumArray(arr) {
   let sumArray =  [ '60','90','80'];
   return total;
};
console.log(sumArray['60','90','80']);

//Write a function "sumArray(arr)" that loops through an array and returns the total of all 
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
    } 
console.log(sumArray([60, 90, 80]));