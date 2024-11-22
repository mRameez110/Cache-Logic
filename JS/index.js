// Async JS  - Callbacks, Promises, Async Await

// 1-  ........  Callback hell

// function sum(n1, n2) {
//   let sum = n1 + n2;
//   console.log("sum is", sum);
//   sum2(sum, 3);
// }

// function sum2(prevSum, n3) {
//   let sum2 = prevSum + n3;
//   console.log("sum is", sum2);
//   sum3(sum2, 4);
// }
// function sum3(prevSum, n4) {
//   let sum3 = prevSum + n4;
//   console.log("sum is", sum3);
// }

// sum(1, 2, sum2);

// 2-  .....  Promises

// simple promise

// function p1() {
//   return new Promise((resolve, reject) => {
//     // "Producing Code" (May take some time)
//     setTimeout(() => {
//       console.log("function p1");
//       resolve("Promise returned sucessfully");
//     }, 2000);
//   });
// }

// // "Consuming Code" (Must wait for a fulfilled Promise)
// p1()
//   .then((value) => console.log("value returned by p1 is ", value))
//   .catch((err) => console.log("eror getting", err));

// Nested Promise(Promise inside promise)

// function data1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting data of function 1.....");
//       resolve("data1 successed");
//     }, 1000);
//   });
// }

// function data2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting data of function 2.....");
//       resolve("data 2 successed");
//     }, 1000);
//   });
// }

// function data3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting data of function 3.....");
//       resolve("data 3 successed");
//     }, 1000);
//   });
// }

// const f1 = data1();

// f1.then((resolve) => {
//   console.log(resolve);
//   const f2 = data2();
//   f2.then((resolve) => {
//     console.log(resolve);
//     const f3 = data3();
//     f3.then((resolve) => {
//       console.log(resolve);
//     });
//   });
// });

// ........ Run promises in Sequence (Promise Chain)

// function asynFunction(dataId) {
//   return new Promise((res, rej) => {
//     console.log(`Getting data ${dataId}...`);
//     setTimeout(() => {
//       console.log("data", dataId);
//       res("successed ");
//     }, 3000);
//   });
// }

// asynFunction(1)
//   .then((res) => {
//     console.log(res);
//     return asynFunction(2);
//   })
//   .then((res) => {
//     console.log(res);
//     return asynFunction(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//  ..... promise Resolve all
//  Promise.all will reject as soon as one of the Promises in the array reject.

const pr1 = Promise.resolve("Prom1 Resolved");
const pr2 = 5;
const pr3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "Good time done")
);

const allPromises = [pr1, pr2, pr3];

Promise.all(allPromises)
  .then((value) => console.log(value))
  .catch((err) => console.log("Geted error is ", err));
