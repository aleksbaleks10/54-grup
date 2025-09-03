// SOME
// 1. Check for negative number
const numbers = [3, -1, 7, 0];
const hasNegative = numbers.some(num => num < 0);

// 2. Check if any string is longer than 10 characters
const strings = ["hello", "extraordinary", "world"];
const hasLongString = strings.some(str => str.length > 10);

// 3. Check if there's anyone under 18
const ages = [22, 17, 30];
const hasMinor = ages.some(age => age < 18);

// 4. Check if any number is divisible by 5
const nums = [12, 25, 33];
const divisibleByFive = nums.some(num => num % 5 === 0);

// 5. Check if any object is active
const users = [
  { name: "Alice", isActive: false },
  { name: "Bob", isActive: true }
];
const hasActiveUser = users.some(user => user.isActive);
// FOREACH
// 6. Print every number
const nums1 = [1, 2, 3, 4];
nums.forEach(num => console.log(num));

// 7. Print each string in uppercase
const words = ["apple", "banana", "cherry"];
words.forEach(word => console.log(word.toUpperCase()));

// 8. Calculate the sum of all numbers
let sum = 0;
const values = [5, 10, 15];
values.forEach(val => sum += val);

// 9. Print greeting for each name
const names = ["Liam", "Emma", "Noah"];
names.forEach(name => console.log(`Hello, ${name}!`));

// 10. Count odd numbers
let oddCount = 0;
const nums2 = [2, 3, 5, 8];
nums2.forEach(num => {
  if (num % 2 !== 0) oddCount++;
});

// MAP
// 11. Return cubes of numbers
const nums3 = [2, 3, 4];
const cubes = nums3.map(num => num ** 3);

// 12. Reverse each word
const words2 = ["hello", "world"];
const reversedWords = words2.map(word => word.split('').reverse().join(''));

// 13. Convert Celsius to Fahrenheit
const celsiusTemps = [0, 20, 30];
const fahrenheitTemps = celsiusTemps.map(c => (c * 9/5) + 32);

// 14. Convert numbers to strings with prefix
const values2 = [10, 20];
const labeledValues = values2.map(val => `Value: ${val}`);

// 15. Return full names
const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];
const fullNames = people.map(p => `${p.firstName} ${p.lastName}`);

