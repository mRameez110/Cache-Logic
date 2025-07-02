const timeId = setTimeout(() => {
	console.log("Inside Timeout", timeId);
}, 2000);
console.log("Outside setTime ", timeId);
