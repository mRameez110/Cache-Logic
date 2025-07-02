const timeId = setTimeout(() => {
	console.log("Inside Timeout", timeId);
}, 2000);
console.log("Outside setTime ", timeId);

setInterval(() => {
	console.log("Hello");
}, 2000);

const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
	console.log("This event is emitted");
});
