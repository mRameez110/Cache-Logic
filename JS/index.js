// Hoisting

greet1();

//  function declaration
function greet1() {
  console.log("Hello greet 1");
}

// functionExpressionTest(); // This will give error "const not defined"

//  Functions expression
const functionExpressionTest = function greet2() {
  console.log("Hello greet 2");
};
