function findmaxi(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findmaxi([1, 11, 5, 7, 4]));

function reverse(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverse([1, 2, 3, 4, 5]));

function squared(arr) {
  let squared = [];
  for (let i = 0; i < arr.length; i++) {
    squared.push(arr[i] * arr[i]);
  }
  return squared;
}
console.log(squared([1, 2, 3, 4, 5]));

function filter(arr) {
  return arr.filter((item) => item.length > 5);
}
console.log(
  filter([
    "apple",
    "banana",
    "mango",
    "kiwi",
    "grapes",
    "orange",
    "pineapple",
    "strawberry",
    "watermelon",
    "papaya",
  ])
);
function temperatura(arr) {
  return arr.map((item) => (item * 9) / 5 + 32);
}
console.log(temperatura([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
