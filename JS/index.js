// String Methods
// String Methods

// Different Methods to Extracting String Parts

// There are 3 methods for extracting a part of a string:
// •	slice(start, end)
// •	substring(start, end)
// •	substr(start, length)

// Slice()

// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
// Can be use with string and also Array.

let myName = "Rameez";

// slice -> to make/ divide string into piece

let sliceTest = myName.slice(2, 4); // starting from index 2 and ending on index 4
console.log(sliceTest);
