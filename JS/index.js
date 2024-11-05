// String Methods
// String Methods

// Different Methods to Extracting String Parts

// There are 3 methods for extracting a part of a string:
// •	slice(start, end)
// •	substring(start, end)
// •	substr(start, length)

// 1- Slice()

// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
// Can be use with string and also Array.

// let myName = "Rameez";

// // slice -> to make/ divide string into piece

// let sliceTest = myName.slice(2, 4); // starting from index 2 and ending on index 4
// console.log(sliceTest);

// 2 - substring()

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

// let myName = "Rameez";
// let subStringTest = myName.substring(-5, 4);
// console.log("Sub String is", subStringTest);

// 3 - substr()

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

let myName = "Rameez";
let subStrTest = myName.substr(2, 3);
console.log("Sub Str is", subStrTest);
