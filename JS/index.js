// // Exception Handling

// // Below code stop/crash server if user not found(Run time error)

// function userFind(id) {
//   const users = { 1: "rameez", 2: "Ashraf" };

//   let user1 = users[id];

//   console.log("user not found");
//   user1.toUpperCase(); // This will crash server if user undefined(not found)

//   console.log(user1);
// }

// userFind(3);

// console.log("This will not run."); // This will not run because the application crashed

// same like above function but application will not crash as handled by error exception

function userFind2(id) {
  const users = { 1: "m", 2: "rameez" };

  try {
    let user = users[id];
    if (!user) throw new Error("User not exist");
    let userInUpperCase = user.toUpperCase();
    console.log(userInUpperCase);
  } catch (err) {
    console.error(err.name);
    console.error(err.message);
  }
}

userFind2(5);
