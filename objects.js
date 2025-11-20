// My First Object
const car = {
  modelName: "BMW X350 i",
  manufactureDate: "1997-11-20",
  title: "My Bema",
  milage: 20000,
  speed: 250,
  colors: ["Blue", "Red", "Black"],
};

const phone = {
  name: "iPhone 13 Pro",
  manufacturer: "Apple",
  releaseDate: "2021-09-24",
  storageOptions: [128, 256, 512, 1024],
  colors: ["Graphite", "Gold", "Silver", "Sierra Blue"],
  greet: (a, b, y) => {
    c = a + b;
    console.log(`${c} is my phone model and ${y} is the manufacturer`);
  },
  getStorageOptions: () => {
    console.log(
      `Available storage options are: ${phone.storageOptions.join(", ")}`
    );
  },
};

// Previewing the Car
// console.log(car);
// console.log(phone);

// Accessing properties in Objects
const myCar =
  "I have a very nice car, it's name is " +
  car.modelName +
  " it was manufactured in " +
  car.manufactureDate +
  " it can go upto speeds of " +
  car.speed;

// console.log(myCar);
// console.log(car.modelName);
// console.log(car["modelName"]); // Not recommended

// Advanced Object Properties Access
const applePhone = phone;
// Adding new property to the object
applePhone.price = 1200;
applePhone.inventory = 200;

// Removing a property from the object
// delete applePhone.releaseDate;

// Modifying existing property
applePhone.price = 999;
applePhone.name = "iPhone 13 Pro Max";
// Add more to the arrays
applePhone.storageOptions.unshift(2048);
applePhone.storageOptions.pop();
applePhone.colors.push("Pacific Blue");

// Working with a method in an object
// applePhone.greet(applePhone.name, applePhone.manufacturer, "Apple Company");
applePhone.getStorageOptions();
