// Execution Context

// functions will go in call stack(Function Execution Context) and follow LIFO

function f1() {
  console.log(1);
  f2();
}

function f2() {
  console.log(2);
  f3();
}

function f3() {
  console.log(3);
}

f1();
