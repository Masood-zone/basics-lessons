
let items = ["sugar", "milk", "bread", "oil"];
console.log(items);

// Adding an item to the start of the array
 let addItems = items.unshift("honey");
 console.log(addItems);
    console.log(items);

 // Remove the **first** item
  let removedItems = items.shift();
    console.log(removedItems);
    console.log(items);

    // Remove the **last** item
    let lastItem = items.pop();
    console.log(lastItem);
    console.log(items);
    
// Convert the final array to a comma-separated string
let itemsString = items.join(',')
console.log(itemsString);

// Convert the final array to a hyphen-separated string
let itemsHyphenString = items.join('-')
console.log(itemsHyphenString);