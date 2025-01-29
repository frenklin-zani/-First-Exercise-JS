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
  string = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      string.push(arr[i]);
    }
  }
  return string;
}
console.log(
  filter(["apple", "banana", "kiwi", "orange", "grapes", "mango", "pineapple"])
);
