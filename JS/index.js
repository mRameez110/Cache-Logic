// Hoisting

// greet1();

// //  function declaration
// function greet1() {
//   console.log("Hello greet 1");
// }

// // functionExpressionTest(); // This will give error "const not defined"

// //  Functions expression
// const functionExpressionTest = function greet2() {
//   console.log("Hello greet 2");
// };

// //  Functions expression
const functionParameterTest = function greet3(name = "Sheikh") {
  console.log("Hello " + name);
};

functionParameterTest("MR"); // If I pass Argument it will override the param default value that is 'Sheikh'
