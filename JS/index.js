// Array(Methods)

// let arrStr = [[1, 2, ["Muh"]], "Rameez", "sheikh"];

// console.log(arrStr[0][2][0][2]); // Getted 'h' from nested Array
// console.log(typeof arrStr);

// let myName = ["M", "Rameez", "G"];
// let joinTest = myName.join("_");
// console.log(joinTest);

// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.

// let numArr = [1, 2, 3, 4, 5];
// let indexOfTest = numArr.indexOf(5);
// console.log(indexOfTest);

// Concatination

// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let concatinationTest = arr1.concat(arr2); // Make 1 combined array
// console.log(concatinationTest);

// Filter
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// let marks = [40, 50, 60, 70];
// let filterTest = marks.filter((m) => m >= 50);
// console.log(filterTest);

let findTest = marks.find((m) => m > 50); // return 1st elemnt who matched
console.log(findTest);
