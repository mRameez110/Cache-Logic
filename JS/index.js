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
