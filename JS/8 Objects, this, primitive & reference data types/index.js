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

// function Person(name) {
//   this.name = name;
// }

// const rameez = new Person("Rameez");
// console.log(rameez.name); // "Rameez"

// 1 - Primitive

// let numOne = 20;
// let numTwo = numOne;
// numOne = 10;
// console.log(numOne); // output: 10
// console.log(numTwo); // output: 20;
// // Both are seprates/ independents copies

// 2- Reference:

let obj1 = {
  name: "M",
  age: 23,
};

obj2 = obj1;
obj1.age = 60;
console.log(obj1);
console.log(obj2); // obj2 will also change as both objects pointing to same memory(Heap) reference
