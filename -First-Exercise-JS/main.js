// 1. Basic syntax and Data types
console.log("Hello JAVASCRIPT!");
// 2. Variable declaration
let a = "hello";
let b = 10;
let c = true;
let d;
let e = null;
console.log(a, b, c, d, e);
// 3.Type conversion
let str = "123";
let num = 456;

let strToNum = Number(str);
let numToStr = String(num);

console.log(strToNum, typeof strToNum);
console.log(numToStr, typeof numToStr);
// 4. Operators and expressions

let num1 = 10;
let num2 = 5;
let plus = num1 + num2;
let minus = num1 - num2;
let shumezim = num1 * num2;
let pjestim = num1 / num2;
let perpjestim = num1 % num2;
console.log(plus, minus, shumezim, pjestim, perpjestim);
//5.even or odd
let num3 = 8;
if (num3 % 2 === 0) {
  console.log("even");
} else if (num3 % 2 !== 0) {
  console.log("odd");
}
//6.comperasion operators
function numra2(num1, num2) {
  result1 = num1 > num2;
  result2 = num1 < num2;
  result3 = num1 >= num2;
  result4 = num1 <= num2;
  result5 = num1 == num2;
  result6 = num1 != num2;
  result7 = num1 === num2;
  result8 = num1 !== num2;
}
let resul = numra2(10, 5);
console.log(
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
  result7,
  result8
);
//7.control flow
let num4 = 76;
if (num4 >= 90) console.log("A");
else if (num4 >= 80) {
  console.log("B");
} else if (num4 >= 70) {
  console.log("C");
} else if (num4 >= 60) {
  console.log("D");
} else {
  console.log("F");
}
//8.fizzbuzz
function fizzbuzz(num5) {
  if (num5 % 3 == 0 && num5 % 5 == 0) {
    console.log("fizzbuzz");
  } else if (num5 % 3 == 0) {
    console.log("fizz");
  } else if (num5 % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(num5);
  }
}
for (let i = 1; i <= 100; i++) {
  fizzbuzz(i);
}
//9 password validation
let password = "fara1234";
let hasNumber = false;
for (let i = 0; password.length > i; i++) {
  if (!isNaN(password[i]) && password[i] !== " ") {
    hasNumber = true;
    break;
  }
}
if (password.length >= 8 && hasNumber) {
  console.log("valid password");
} else {
  console.log("invalid password");
}

//10.greetin function
function greet(name) {
  console.log(`Hello , ${name}!`);
}

greet("Alice");
greet("Bob");
//11.factorial calculation
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(7));
//12. palindrome check
function isPalindrome(str) {
  let reverstr = str.split("").reverse().join("");
  if (str === reverstr) {
    console.log("palindrome");
  } else if (str !== reverstr) {
    console.log("not palindrome");
  }
}
isPalindrome("madam");
//13. array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
//14. find max
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 11, 5, 7, 4]));
//15. filter even numbers
function filterEven(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//16.object
//16.1 object properties
let person = {
  name: "frenklin",
  age: 24,
  hobibies: "basketball",
};
console.log(person);
console.log(person.name, person.age, person.hobibies);
//16.2 object methods
console.log(
  "hi,I`m " + person.name + " and I am " + person.age + " years old!"
);
//16.3 shopping cart
let shoppingCart = [
  { name: "molle", price: 1.5, quantity: 4 },
  { name: "banane", price: 0.5, quantity: 6 },
  { name: "portokall", price: 1.0, quantity: 3 },
];
function calculateTotalCost(cart) {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].price * cart[i].quantity;
  }
  return totalCost;
}

console.log("Total Cost=$ " + calculateTotalCost(shoppingCart));

// For loop
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += sum[i];
  return sum;
}
console.log(sum);
