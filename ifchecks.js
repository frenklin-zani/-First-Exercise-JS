function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`even ${num}`);
  } else {
    console.log(`odd ${num}`);
  }
}
console.log(evenOrOdd(8));
function pozitivnegativosewzero(num) {
  if (num > 0) {
    console.log(`pozitiv ${num}`);
  } else if (num < 0) {
    console.log(`negativ ${num}`);
  } else {
    console.log(`zero ${num}`);
  }
}
console.log(pozitivnegativosewzero(-17));
function leap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`leap year ${year}`);
  } else {
    console.log(`not leap year ${year}`);
  }
}
console.log(leap(2020));

function eligibletovote(age) {
  if (age >= 18) {
    console.log(`eligible to vote ${age}`);
  } else {
    console.log(`not eligible to vote ${age}`);
  }
}
console.log(eligibletovote(24));
