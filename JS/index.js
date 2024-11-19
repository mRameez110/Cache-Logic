//   Objects

// const obj = {
//   name: "rameez",
//   login: function () {
//     console.log("its login function");
//   },

//   logut: function () {
//     console.log("Print login function in logout method", this.login); // this inside object refere to current object
//     console.log("this refer to object", this);
//   },

//   logut2: () => {
//     console.log("Print login function in logout arrow function", this.login); // this inside object refere to current obj
//     console.log(
//       "this in arrow function inside object also refer to global object ",
//       this
//     );
//   },
// };

// obj.logut2();
// console.log("this refer to object", this); // this independently(outside) refer to global object

// .......  this in Constructor Functions

// In constructor functions (functions used to create objects), this refers to the newly created object.

// Example:

function Person(name) {
  this.name = name;
}

const rameez = new Person("Rameez");
console.log(rameez.name); // "Rameez"
