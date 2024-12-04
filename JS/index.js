// Classes in JS

// Creating a class with 2 properties

// constructor -> It run when ever any object of the class creates

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    console.log(this.name);

    setTimeout(() => {
      console.log(this.year);
    }, 2000);
  }
}

const myCar1 = new Car("wagonR", 2015);
