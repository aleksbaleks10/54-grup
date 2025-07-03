// 4. Print numbers from 1 to 5
let a = 1;
do {
  console.log("4:", a);
  a++;
} while (a <= 5);

// 5. Print even numbers from 2 to 10
let b = 2;
do {
  console.log("5:", b);
  b += 2;
} while (b <= 10);

// 6. Print numbers from 10 down to 1
let c = 10;
do {
  console.log("6:", c);
  c--;
} while (c >= 1);

// 7. Ask user to enter number > 100
let num;
do {
  num = Number(prompt("7: Enter a number greater than 100:"));
} while (num <= 100 && num !== 0);

// 8. Sum numbers from 1 to 10
let d = 1, total = 0;
do {
  total += d;
  d++;
} while (d <= 10);
console.log("8: Total sum:", total);

// === 9–13: for...of loops ===

const numbers = [3, 6, 9, 12];

// 9. Print each element
for (let n of numbers) {
  console.log("9:", n);
}

// 10. Print each character in a string
const greeting = "Hello";
for (let char of greeting) {
  console.log("10:", char);
}

// 11. Sum all numbers
let sum = 0;
for (let n of numbers) {
  sum += n;
}
console.log("11: Array sum:", sum);

// 12. Print even numbers
for (let n of numbers) {
  if (n % 2 === 0) console.log("12:", n);
}

// 13. Print all names
const names = ["Aria", "Ben", "Chloe", "Dmitri"];
for (let name of names) {
  console.log("13:", name);
}


const person = {
  name: "Tako",
  age: 28,
  city: "Tbilisi"
};

// 14. Print all property names
for (let key in person) {
  console.log("14:", key);
}

// 15. Print all property values
for (let key in person) {
  console.log("15:", person[key]);
}

// 16. Count properties
let count = 0;
for (let key in person) {
  count++;
}
console.log("16: Property count:", count);

// 17. Check if a specific key exists
const searchKey = "age";
let found = false;
for (let key in person) {
  if (key === searchKey) {
    found = true;
    break;
  }
}
console.log(`17: Key "${searchKey}" found?`, found);

// 18. Create a string listing all keys
let keyList = "";
for (let key in person) {
  keyList += key + ", ";
}
console.log("18: Keys list:", keyList.slice(0, -2));