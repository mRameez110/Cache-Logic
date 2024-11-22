// Async JS  - Callbacks, Promises, Async Await

// 1-  ........  Callback hell

function sum(n1, n2) {
  let sum = n1 + n2;
  console.log("sum is", sum);
  sum2(sum, 3);
}

function sum2(prevSum, n3) {
  let sum2 = prevSum + n3;
  console.log("sum is", sum2);
  sum3(sum2, 4);
}
function sum3(prevSum, n4) {
  let sum3 = prevSum + n4;
  console.log("sum is", sum3);
}

sum(1, 2, sum2);
