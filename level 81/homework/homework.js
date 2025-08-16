// === 5–9: break ===
console.log("Section 5-9:");
for (let i = 1; i <= 20; i++) {
  if (i === 13) break;
  console.log("Num:", i);
}

const colors = ["red", "green", "blue", "yellow"];
for (let color of colors) {
  if (color === "blue") break;
  console.log("Color:", color);
}

for (let i = 1; i <= 50; i++) {
  if (i % 4 === 0 && i % 5 === 0) break;
  console.log("Count:", i);
}

const word = "giraffe";
for (let char of word) {
  if (char === "a") break;
  console.log("Char:", char);
}

let total = 0;
for (let i = 1; ; i++) {
  total += i;
  if (total >= 100) break;
  console.log("Add:", i);
}

// === 10–14: continue ===
console.log("nSection 10–14:");
for (let i = 1; i <= 20; i++) {
  if (i === 13) continue;
  console.log("Num:", i);
}

const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  if (fruit === "banana") continue;
  console.log("Fruit:", fruit);
}

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) continue;
  console.log("Count:", i);
}

const word2 = "cheese";
for (let letter of word2) {
  if (letter === "e") continue;
  console.log("Letter:", letter);
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) continue;
  console.log("Odd:", i);
}

// === 15–19: Arrow Functions ===
console.log("\nSection 15–19:");
const add = (a, b) => a + b;
console.log("Add:", add(5, 3));

const greet = name => `Hello, ${name}!`;
console.log(greet("Maya"));

const doubleArray = arr => arr.map(n => n * 2);
console.log("Doubled:", doubleArray([1, 2, 3]));

const isEven = num => num % 2 === 0;
console.log("Is 4 even?", isEven(4));

const getLength = str => str.length;
console.log("Length:", getLength("elephant"));

// === 20–24: Function with Arguments ===
console.log("\nSection 20–24:");

function printArgs(...args) {
  for (let arg of args) {
    console.log("Arg:", arg);
  }
}
printArgs(1, "hi", true);

function countArgs(...args) {
  console.log("Count:", args.length);
}
countArgs(1, 2, 3, 4);

function sumNumbers(...args) {
  let sum = 0;
  for (let arg of args) {
    if (typeof arg === "number") sum += arg;
  }
  console.log("Sum:", sum);
}
sumNumbers(5, "apple", 10, 15);

function stopAtZero(...args) {
  for (let arg of args) {
    if (arg === 0) break;
    console.log("Value:", arg);
  }
}
stopAtZero(3, 2, 0, 1);

function skipStrings(...args) {
  for (let arg of args) {
    if (typeof arg === "string") continue;
    console.log("Numeric Only:", arg);
  }
}
skipStrings(1, "hello", true, 42);