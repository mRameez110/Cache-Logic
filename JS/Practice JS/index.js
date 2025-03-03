// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text = text + x + " ";
// }

// console.log(text);

// let str = "hello g";
// let strArray = str.split(" ");
// console.log(strArray);

// console.log(strArray.length);
// let splited = str.slice();

// let str = "hello";

// let strReverse = "";
// let start = 0;
// let end = str.length - 1;
// let temp = "";

// for (let i = 0; i < str.length; i++) {
//   temp = str[end];
//   strReverse += temp;
//   end--;
// }
// console.log(strReverse);

// let str = "hello";

// let splitStr = str.split("");
// console.log(splitStr);
// let temp = "";
// let end = str.length - 1;
// let reverseStr = "";
// for (let i of splitStr) {
//   temp = splitStr[end];
//   reverseStr += temp;
//   end--;
// }
// console.log(reverseStr);

// Callback Hell Demo

// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result = init + 2;
//   callback(result);
// }

// function doStep3(init, callback) {
//   const result = init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, 999999);

//   2 question by ahmad

// function f1() {
//   console.log("f1");
// }

// function f1(n1) {
//   console.log("f2");
// }

// function f1(n1, n2) {
//   console.log("f3");
// }

// f1();
// f1(5);
// f1(5, 3);

function createCounter() {
  let count = 0; // This variable is part of the lexical environment of increment

  return function increment() {
    count += 1; // Increment retains access to count due to closure
    return count;
  };
}

const counter = createCounter(); // create counter returning the reference of increment function
// Now, counter pointing to increment function
console.log(counter()); // Outputs: 1  -> Calling increment function
console.log(counter()); // Outputs: 2  -> Calling increment function
