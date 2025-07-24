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

const fs = require("fs");
const path = require("path");

console.log("Outside setTime ", timeId);

setInterval(() => {
  console.log("Hello");
}, 2000);

const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("This event is emitted");
});

eventEmitter.emit("start");

const fs = require("node:fs/promises");

async function example() {
  try {
    const res = await fs.stat("./data.txt");
    console.log(res.isFile());
  } catch (err) {}
}
