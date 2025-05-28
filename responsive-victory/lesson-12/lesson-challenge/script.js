const donisKia = {
  make: "Kia",
  model: "Donis",
  year: 2022,
};

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
};

console.log(car.year);

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const myRectangle = new Rectangle(5, 4);
console.log(myRectangle.area());

class Employee {
  // state that we're going to use two variables, name and salary
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  //manager uses name and salary from Employee
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }
  //getSalary() is overridden here
  getSalary() {
    return this.salary + this.bonus;
  }
}

const managerJohn = new Manager("John", 5000, 1000);
console.log(managerJohn.getSalary());
