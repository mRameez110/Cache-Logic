// const timeId = setTimeout(() => {
//   console.log("Inside Timeout", timeId);
// }, 2000);
// console.log("Outside setTime ", timeId);

// setInterval(() => {
//   console.log("Hello");
// }, 2000);

// const EventEmitter = require("node:events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("start", () => {
//   console.log("This event is emitted");
// });

// eventEmitter.emit("start");

// const fs = require("node:fs/promises");

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

// console.log("Outside setTime ", timeId);

// setInterval(() => {
//   console.log("Hello");
// }, 2000);

// const EventEmitter = require("node:events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("start", () => {
//   console.log("This event is emitted");
// });

// eventEmitter.emit("start");

// const fs = require("node:fs/promises");
// async function example() {
//   try {
//     const res = await fs.stat("./data.txt");
//     console.log(res.isFile());
//   } catch (err) {
//     console.error("Error is", err);
//   }
// }
// example();

const fs = require("fs");
const path = require("path");

const info = "./data.txt";

console.log(path.dirname(info));
console.log(path.basename(info));
console.log(path.extname(info));

fs.open("./data.txt", "r", (err, fileDescriptor) => {
  console.log("File description is", fileDescriptor);
});

let arr = [1, 2, 3, 4, 5];

let arr3 = arr.forEach((ele) => {
  console.count(ele);
  return ele;
});

console.log(arr3);

function check() {
  console.trace();
}

check();

function checkTime() {

}

