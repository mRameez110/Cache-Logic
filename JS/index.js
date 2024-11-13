// i) Numbers in JS

// let a = 5;
// a = 5 ** 3; //  Power Operator
// console.log(a);

// ii) Order of operation  --> According to BIDMAS

// let bidmasTest = 5 * (10 - 3) ** 2;
// console.log(bidmasTest);

// iii)  Undefined

// let age;
// console.log(age); // age is not defined, it default value will be undefined

// iv)  NaN(not a Number)

let nanTest = 5;
nanTest = 5 * "Hello"; // Canot perform mulipply operation with 1 number and 1 string
console.log(nanTest); // Output: Nan
console.log(typeof nanTest); // Output: Number -> Bcz nan is itself a number
