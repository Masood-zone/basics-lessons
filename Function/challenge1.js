function greet(name) {
  return `Hello, ${name}!`;
}
// #1, #2
const userNames = ["Alice", "Rabbit", "Princess"];

const greetUser = userNames.map((username) => {
  return greet(username);
});

console.log(greetUser);
