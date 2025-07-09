// 1. Anonymous function assigned to a variable
const multiply = function(a, b) {
  return a * b;
};
console.log("Multiply 3 * 4 =", multiply(3, 4));

// 2. Anonymous function inside setInterval
setInterval(function() {
  console.log("Hello every 2 seconds!");
}, 2000);

// 3. Anonymous function as event listener
document.addEventListener("DOMContentLoaded", function() {
  const button = document.createElement("button");
  button.textContent = "Click me!";
  button.id = "myButton";
  document.body.appendChild(button);

  document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
  });
});

// 4. Arrow function that adds two numbers
const add = (x, y) => x + y;
console.log("Add 5 + 7 =", add(5, 7));

// 5. Arrow function to check even or odd
const isEvenOrOdd = num => (num % 2 === 0 ? "Even" : "Odd");
console.log("7 is", isEvenOrOdd(7));

// 6. Arrow function returning lengths of strings
const getStringLengths = strings => strings.map(str => str.length);
console.log("String lengths:", getStringLengths(["apple", "banana", "cherry"]));

// 7. Arrow function filtering out negative numbers
const filterNegatives = numbers => numbers.filter(n => n >= 0);
console.log("Filtered array:", filterNegatives([-5, 3, 0, -2, 9]));

// 8. IIFE that prints "Hello, world!"
(function() {
  console.log("Hello, world!");
})();

// 9. IIFE that calculates square of a number
(function(num) {
  console.log(`Square of ${num} =`, num * num);
})(8);

// 10. IIFE that logs the sum of an array
(function(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  console.log("Sum of array =", sum);
})([10, 20, 30, 40]);