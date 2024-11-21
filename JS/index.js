// //    ......  Shallow Copy and Deep copy

// // Primitive data types are always copied as deep copy(by value)
// // 1- Shallow Copy

// // When we copy the reference of non-primitive(reference data types)

// 1- Shallow Copy

// let arr1 = [1, 2, 3]; // arrays is reference data type
// // arr1 containg reference of array [1,2,3]

// let shallowCopy = arr1; // reference stored in arr1 will be copy in shallowCopy
// // As shallow copy contain same reference as arr1
// // so change in anyone of BroadcastChannel, will effect other one also
// // And this is shallow copy

// arr1.push(40); // change in arr1 also effect shallow copy

// console.log(arr1);
// console.log(shallowCopy);

// 2 - Deep Copy

// deep copy(Can be by spread operator)
// A complete independt copy of reference data type
// change in one not effect other one

let arr2 = [1, 2, 3];
let deepCopy = [...arr2];

deepCopy.push(99); // change in copied array(deepCopy) will not effect original(arr2) Array

console.log(arr2);
console.log(deepCopy);
