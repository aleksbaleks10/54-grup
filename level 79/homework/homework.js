// 1. Copy Object Keys to Array
const obj = { name: 'John', age: 30 };
const keys = [];
for (let key in obj) {
  keys.push(key);
}
console.log('1. Object Keys:', keys);

// 2. Sum Only Numeric Properties
const data = { a: 10, b: 'hi', c: 20 };
let sum = 0;
for (let key in data) {
  if (typeof data[key] === 'number') {
    sum += data[key];
  }
}
console.log('2. Total Sum:', sum);

// 3. Convert Object to Key=Value String
const person = { name: 'John', age: 30, city: 'Paris' };
let str = '';
for (let key in person) {
  str += `${key}=${person[key]}, `;
}
str = str.slice(0, -2);
console.log('3. Key=Value String:', str);

// 4. List All Keys with Their Types
const user = { name: 'Alice', age: 25, active: true };
console.log('4. Keys and Types:');
for (let key in user) {
  console.log(`${key}: ${typeof user[key]}`);
}

// 5. Detect Nested Object
const complex = { name: 'Bob', address: { city: 'Rome' }, age: 40 };
for (let key in complex) {
  if (typeof complex[key] === 'object' && complex[key] !== null) {
    console.log(`5. Nested object found at key: ${key}`);
  }
}

// 6. Filter Long Words
const words = ['apple', 'elephant', 'cat', 'strawberry'];
console.log('6. Words longer than 5 characters:');
for (let word of words) {
  if (word.length > 5) {
    console.log(word);
  }
}

// 7. Create a String from Characters
const chars = ['H', 'e', 'l', 'l', 'o'];
let word = '';
for (let char of chars) {
  word += char;
}
console.log('7. Joined Word:', word);

// 8. Multiply Numbers Until Over 1000
let num = 1;
console.log('8. Multiplying numbers:');
do {
  console.log(num);
  num *= 2;
} while (num <= 1000);

// 9. Collect User Inputs (for browser use)
const numbers = [];
let input;
do {
  input = prompt("Enter a number (type 'stop' to finish):");
  if (input !== 'stop') {
    numbers.push(Number(input));
  }
} while (input !== 'stop');
console.log('9. Collected Inputs:', numbers);

// 10. Countdown Timer with Step
let count = 30;
console.log('10. Countdown:');
do {
  console.log(count);
  count -= 3;
} while (count >= 0);