// creating an array
let selectedFruit = ['apple','banana','mango','orange'];
// printing the first fruit
console.log(selectedFruit[0])

// printing the last fruit
console.log(selectedFruit[3]);

// adding fuit to the last of the array
selectedFruit.push('pineapple');
console.log(selectedFruit);

// adding fuit to the beginning of the array
selectedFruit.unshift('strawberry');
console.log(selectedFruit);

//removing last item 
selectedFruit.pop();
console.log(selectedFruit);
// removing first item
selectedFruit.shift()
console.log(selectedFruit);