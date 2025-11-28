
const names = ["Ama", "Kojo", "Yaw, Esi"];

const users = names.map((name, index) => {
  return {
    id: index + 1,
    username: name
  };
});

console.log(users);

