// 1. Find the first string in an array that starts with the letter "A"
const strings = ["banana", "apple", "Avocado", "cherry"];
const firstStringWithA = strings.find(str => str.startsWith("A"));
console.log("First string starting with 'A':", firstStringWithA);

// 2. Find the first object in an array of users whose age is over 30
const users = [
  { name: "Tom", age: 25 },
  { name: "Lisa", age: 32 },
  { name: "Mark", age: 28 }
];
const firstUserOver30 = users.find(user => user.age > 30);
console.log("First user over 30:", firstUserOver30);

// 3. Find the first word in an array that has more than 5 characters
const words = ["cat", "elephant", "dog", "giraffe"];
const firstLongWord = words.find(word => word.length > 5);
console.log("First word with more than 5 characters:", firstLongWord);

// 4. Find the first product in an array of objects where the price is less than 20
const products = [
  { name: "Notebook", price: 25 },
  { name: "Pen", price: 5 },
  { name: "Backpack", price: 45 }
];
const firstCheapProduct = products.find(product => product.price < 20);
console.log("First product under $20:", firstCheapProduct);

// 5. Find the first student object in an array whose grade is "A"
const students = [
  { name: "John", grade: "B" },
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "C" }
];
const firstGradeAStudent = students.find(student => student.grade === "A");
console.log("First student with grade 'A':", firstGradeAStudent);
// 6. Index of the first number less than 0
const numbers = [5, 3, -2, 8, 0];
const indexNegative = numbers.findIndex(num => num < 0);
console.log("Index of first number < 0:", indexNegative); 

// 7. Index of the first string ending with "ing"
const verbs = ["run", "jumping", "play", "swimming"];
const indexIng = verbs.findIndex(str => str.endsWith("ing"));
console.log("Index of first string ending with 'ing':", indexIng); 

// 8. Index of the first user with isActive = true
const users1 = [
  { name: "Tom", isActive: false },
  { name: "Lisa", isActive: true },
  { name: "Mark", isActive: false }
];
const indexActiveUser = users.findIndex(user => user.isActive);
console.log("Index of first active user:", indexActiveUser); 

// 9. Index of the first number that is a multiple of 10
const values1 = [3, 7, 20, 13, 40];
const indexMultipleOf10 = values.findIndex(num => num % 10 === 0);
console.log("Index of first multiple of 10:", indexMultipleOf10);

// 10. Index of the first fruit name with exactly 5 letters
const fruits = ["apple", "pear", "grape", "melon", "plums"];
const indexFiveLetterFruit = fruits.findIndex(fruit => fruit.length === 5);
console.log("Index of first fruit with 5 letters:", indexFiveLetterFruit); 
// 11. Last number in an array greater than 100
const numbers1 = [45, 150, 90, 200, 80];
const lastOver100 = numbers1.slice().reverse().find(num => num > 100);
console.log("Last number > 100:", lastOver100); // 200

// 12. Last string containing the letter "e"
const strings1 = ["cat", "dog", "elephant", "lion", "tiger"];
const lastWithE = strings1.slice().reverse().find(str => str.includes("e"));
console.log("Last string with 'e':", lastWithE); // "tiger"

// 13. Last user with age under 25
const users2 = [
  { name: "Tom", age: 30 },
  { name: "Lisa", age: 22 },
  { name: "Mark", age: 24 },
  { name: "Nina", age: 26 }
];
const lastYoungUser = users2.slice().reverse().find(user => user.age < 25);
console.log("Last user under 25:", lastYoungUser); // { name: "Mark", age: 24 }

// 14. Last odd number in an array
const values = [2, 4, 6, 9, 10, 13, 16];
const lastOdd = values.slice().reverse().find(num => num % 2 !== 0);
console.log("Last odd number:", lastOdd);

// 15. Last word starting with a vowel
const words1 = ["banana", "apple", "orange", "grape", "umbrella"];
const vowels = ['a', 'e', 'i', 'o', 'u'];

const lastVowelWord = words1.slice().reverse().find(word => {
  const firstChar = word[0].toLowerCase();
  return vowels.includes(firstChar);
});

console.log("Last word starting with a vowel:", lastVowelWord);
