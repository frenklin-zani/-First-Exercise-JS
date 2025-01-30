function countCharacterOccurrences(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

const str = "hello world";
console.log(countCharacterOccurrences(str));

function fibonacci(n) {
  const fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence.slice(0, n);
}
const n = 10;
console.log(fibonacci(n));

function filterBooksByAuthor(books, author) {
  return books.filter((book) => book.author === author);
}
const books = [
  { title: "Book 1", author: "Author A" },
  { title: "Book 2", author: "Author B" },
  { title: "Book 3", author: "Author A" },
  { title: "Book 4", author: "Author C" },
];
const author = "Author A";
console.log(filterBooksByAuthor(books, author));
