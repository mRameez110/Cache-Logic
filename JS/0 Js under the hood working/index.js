// Execution Context

// functions will go in call stack(Function Execution Context) and follow LIFO

// function f1() {
//   console.log(1);
//   f2();
// }

// function f2() {
//   console.log(2);
//   f3();
// }

// function f3() {
//   console.log(3);
// }

// f1();

// Can check it execution flow from source under the dev tool

// Hoisting

console.log(x); // undefined as it created with undefined and also executed with value undefined
// console.log(a); // ReferenceError: Cannot access 'a' before initialization As let // have block scope and var have global scope

var x = 5;
var y = 3;
// let a = 10;

hoistingTest();
function hoistingTest() {
  console.log("Hositing testing");
}
