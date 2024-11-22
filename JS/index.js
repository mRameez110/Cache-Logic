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

function data1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting data of function 1.....");
      resolve("data1 successed");
    }, 1000);
  });
}

function data2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting data of function 2.....");
      resolve("data 2 successed");
    }, 1000);
  });
}

function data3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting data of function 3.....");
      resolve("data 3 successed");
    }, 1000);
  });
}

const f1 = data1();

f1.then((resolve) => {
  console.log(resolve);
  const f2 = data2();
  f2.then((resolve) => {
    console.log(resolve);
    const f3 = data3();
    f3.then((resolve) => {
      console.log(resolve);
    });
  });
});
