class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  MakeSound() {
    console.log(`The ${this.name} goes ${this.sound}`);
  }
}
const animal1 = new Animal("dog", "barks");
animal1.MakeSound();

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  Move() {
    console.log(`${this.brand} moves at ${this.speed} km/hr`);
  }
}

class Car extends Vehicle {
  constructor(brand, speed, fuel) {
    super(brand, speed);
    this.fuel = fuel;
  }
  Move() {
    console.log(
      `${this.brand} moves at ${this.speed} km/hr and runs on ${this.fuel}`
    );
  }
}
const car1 = new Car("BMW", 200, "petrol");
car1.Move();

class employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  showDetails() {
    console.log(`Name: ${this.name} and saleryee : ${this.salary}`);
  }
}
class manager extends employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  showDetails() {
    console.log(
      `Name: ${this.name} and ID: ${this.salary} works in ${this.department}`
    );
  }
}
const employee1 = new employee("John", 1001);
const employee2 = new manager("Doe", 1002, "HR");
employee1.showDetails();
employee2.showDetails();

class Shape {
  constructor(name) {
    this.name = name;
  }
}
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(name, widtg, height) {
    super(name);
    this.widtg = widtg;
    this.height = height;
  }
  area() {
    return this.widtg * this.height;
  }
}

const circle1 = new Circle("Circle", 7);
console.log(circle1.area());
const rectangel1 = new Rectangle("Rectangle", 5, 6);
console.log(rectangel1.area());

class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
}
class SavingsAccount extends BankAccount {
  constructor(name, balance, interest) {
    super(name, balance);
    this.interest = interest;
  }
  deposit(amount) {
    super.deposit(amount);
    this.balance += this.balance * this.interest;
  }
}
const account1 = new SavingsAccount("John", 1000, 0.1);
