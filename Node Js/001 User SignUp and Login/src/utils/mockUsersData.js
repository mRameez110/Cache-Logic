const users = [
  {
    id: 1,
    username: "a",
    email: "a@gmail.com",
    password: "",
  },
  {
    id: 2,
    username: "b",
    email: "@gmail.com",
    password: "",
  },
];

const addNewUser = (id, username, email, password) => {
  const newUser = { id, username, email, password };
  users.push(newUser);
  console.log("Print new user data in mock data file", newUser);
  return newUser;
};

module.exports = { addNewUser };
