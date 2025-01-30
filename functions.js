function add(a, b) {
  return a + b;
}
console.log(add(11, 37));
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

console.log(isPrime(121));
console.log(isPrime(24));

function longestWord(arr) {
  let max = 0;
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}
console.log(
  longestWord([
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
