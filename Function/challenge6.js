//Write a function "filterAbove50(arr)" that returns only numbers above 50.
function filterAbove50(arr) {
    return arr.filter(arr => arr > 50);
} 
console.log(filterAbove50([10, 60, 45, 80, 30, 90]));