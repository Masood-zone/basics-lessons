/*
Challenge 2 — Extract usernames
You receive an array of user objects:

const users = [
  { name: "Ama", active: true },
  { name: "Kojo", active: false },
  { name: "Yaw", active: true },
  { name: "Esi", active: false }
];


Tasks:
1. Use filter to keep only active users.
2. Use map to extract only the name property.
3. Print the result.
*/

const users = [
  { name: "Ama", active: true },
  { name: "Kojo", active: false },
  { name: "Yaw", active: true },
  { name: "Esi", active: false },
];

// 1. Use filter to keep only active users.
const activeUsers = users.filter((user) => user.active === true);

/*
Pick { name: "Ama", active: true }, is active === true, YES, keep element
Pick { name: "Kojo", active: false }, is active === true, NO, remove element
Pick { name: "Yaw", active: true }, is active === true, YES, keep element
Pick { name: "Esi", active: false }, is active === true, NO, remove element
*/

// 2. Use map to extract only the name property.
const userNames = activeUsers.map((user) => user.name);
// 3. Print the result
console.log(userNames);
