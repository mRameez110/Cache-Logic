// Type Conversion(Implicit & Explixit)

// Implicit
// Type conversion by JS Compiler(Behind the scene) is done by Implicit conversion

// e.g;

// console.log(5 === "5"); // Comparision done by implicit type conversion

// let result = "The number is " + 5; // 5 is converted to string implicity
// console.log(result); // Outputs: "The number is 5"

// Explicit

let score = "100";
// Score type is string but we want as number
console.log(typeof score);

// Do type Conversion

score = Number(score); // Convert string score into number score
console.log(typeof score);

let hel = "hello";
console.log(typeof hel); // type of hel is string
hel = Number(hel); //  As we converting Non Number String into number it will return Nan
console.log(hel);
