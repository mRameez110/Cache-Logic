// const timeId = setTimeout(() => {
//   console.log("Inside Timeout", timeId);
// }, 2000);
// console.log("Outside setTime ", timeId);

// setInterval(() => {
//   // runs every 2 seconds
//   console.log("Hello");
// }, 2000);

// const EventEmitter = require("node:events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("start", () => {
//   console.log("This event is emitted");
// });

// eventEmitter.emit("start");

// const fs = require("node:fs/promises");

// fs.stat("./data.txt", (err, info) => {
//   if (err) console.log("Error in file is ", err);
//   else console.log("Stats of the file are ", info);
// });

//  -> Change into async Await

// async function example() {
//   try {
//     const res = await fs.stat("./data.txt");
//     console.log(res.isFile());
//   } catch (err) {
//     console.error("Error is", err);
//   }
// }

// example();

// const fs = require("fs");
// const path = require("path");

// const info = "./data.txt";
// console.log(path.dirname(info));
// console.log(path.basename(info));
// console.log(path.extname(info));

// console.log(path.resolve("./data.txt")); // I will get absolute path

// fs.open("./data.txt", "r", (err, fileDescriptor) => {
//   console.log("File description is", fileDescriptor);
// });

// let arr = [1, 2, 3, 4, 5];

// let arr3 = arr.forEach((ele) => {
//   console.count(ele);
//   return ele;
// });

// console.log(arr3);

// function check() {
//   console.trace();
// }

// check();

// function checkTime() {
//   console.log("This is function fot execution time check");
// }

// console.time("checkTime()");
// checkTime();
// console.timeEnd("checkTime()");

const color = require("chalk");
console.log(color.yellow("Hello"));
