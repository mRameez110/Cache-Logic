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

// let name = "Rameez"; // String Literal
// console.log(typeof name);
// let age = 23; // Number Literal
// let genderMale = ture; // Boolean Literal
// let lastName = undefined;
// console.log(typeof lastName);
// let result = null; // explicity set a variable with no value
// console.log(typeof result); //  its type is 'object'

//  Dynamic Typing(Type of variable change at run time)
// This is the feature that different JS language form another languages

// let name4 = "Rameez";
// console.log(typeof name4);
// name4 = 5;
// console.log(typeof name4);

// //  in Js all number is type of number,  not float, double etc
// let num1 = 5;
// let num2 = 5.3; // both have same type number
// console.log(typeof (num1, num2));

//  .... List of reference types ...
//      Object, Array, Function

// What is Object? In programing languages, Objects are the properties of real life objects
// such as name, age, address etc are properties of Person Objects

// Objects have key values pairs
// let person = {
//   name: "M Sheikh",
//   age: 23,
// };
// console.log(person);

// // Two ways to access the object properties(By Dot notation and by Bracket Notation)

// person.name = "M Rameez";
// console.log(person);
// person["name"] = "M Ashraf"; // Write name of property-Name in single/double quote, single quote
// // is preferable
// console.log(person);

// When Bracket notation? When we need to acces/modify property dynamically or cuurently dont know
// // the property in that case its good to use Bracket Notation.

//  6: Arrays

// What is Array? Array is data structure to store/represent list of items
// In JS, Arary is dynamic, its size/length/value/ data Type can be modify at any type
// Big Difference? In JS, we can save different type of elements in an Array, rather then the same
// type of elements like in other progmaing languages
// Note: Technically array is an object

// let selected_color = ["red", "green"];
// selected_color[2] = "blue"; // In JS Array is dyamic
// selected_color[3] = 8;
// console.log(selected_color);
// console.log(typeof selected_color); // its show type = object, so Array is object

//    Functions

// What is Function? A function is set of statement that perform a task and return the result's.
// Functions are the fundamentals building blocks of programing laguages

// this function not return anything
function greet(name, lastName) {
  // Variable-Name is the parameter(Reciving argument), its not
  //accessible outside the function
  console.log("Hello " + name + " " + lastName);
}

// If we call function with less number of arguments TouchEvent, remaing parametrs will be undefined
// that is default. Demo:

greet("Salam"); // Function output: Hello Salam undefined

greet("Rameez", "Ashraf"); // This is argument( Argument is the actual value that we pass to the fuction)

// Types of Functions(Function with return)

function square(num) {
  return num * num;
}

let number = square(5);
console.log(number);
