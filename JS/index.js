// Exception Handling

// Below code stop/crash server if user not found(Run time error)

function userFind(id) {
  const users = { 1: "rameez", 2: "Ashraf" };

  let user1 = users[id];

  console.log("user not found");
  user1.toUpperCase(); // This will crash server if user undefined(not found)

  console.log(user1);
}

userFind(3);

console.log("This will not run."); // This will not run because the application crashed
