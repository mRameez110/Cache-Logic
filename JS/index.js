// .......   let vs var  ..........

// Var
// The variables that are defined with var statement have function scope.
// We can declare a variable again even if it has been defined previously in the same scope.
// Hoisting is allowed with var.

// Let

// The variables that are defined with let statement have block scope.
// We cannot declare a variable more than once if we defined that previously in the same scope.
// let is hoisted but inaccessible due to temporal dead zone

// function testVarLet() {
//   if (true) {
//     var x = 10; // `var` is function-scoped
//     let y = 20; // `let` is block-scoped
//   }
//   console.log(x); // 10 (Accessible, since x is function-scoped)
//   console.log(y); // Error (Not accessible, since y is block-scoped)
// }
// testVarLet();

//  Default value of variable is unefined: Demo Below

// let defaultsVariableValue;
// console.log(defaultsVariableValue);  // its default value is = undefined

//  .........   Data Types  .........

// In JS, we have two types one is "Primitive(also called Value Types" and another type is
// Reference Types
// List of Primitives:
// String, Numbers, Boolean, Null, undefined

let name = "Rameez"; // String Literal
console.log(typeof name);
let age = 23; // Number Literal
let genderMale = ture; // Boolean Literal
let lastName = undefined;
console.log(typeof lastName);
let result = null; // explicity set a variable with no value
console.log(typeof result); //  its type is 'object'
