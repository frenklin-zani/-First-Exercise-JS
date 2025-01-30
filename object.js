const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  getCarInfo: function () {
    return `${this.make} ${this.model}, ${this.year}`;
  },
};
console.log(car.getCarInfo());

function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log(getObjectKeys(car));

const student = {
  name: "John Doe",
  age: 20,
  grades: [85, 90, 78, 92],
  getAverageGrade: function () {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  },
};
console.log(student.getAverageGrade());

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));

const shoppingCart = {
  items: {
    apple: 1.5,
    banana: 0.75,
    orange: 1.25,
  },
  getTotalCost: function () {
    return Object.values(this.items).reduce((total, price) => total + price, 0);
  },
};
console.log(shoppingCart.getTotalCost());
