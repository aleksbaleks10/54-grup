// 1. Find the first string in an array that starts with the letter "A"
const strings1 = ["banana", "apple", "Avocado", "cherry"];
const firstStringWithA1 = strings.find(str => str.startsWith("A"));
console.log("First string starting with 'A':", firstStringWithA1);

// 2. Find the first object in an array of users whose age is over 30
const users2 = [
  { name: "Tom", age: 25 },
  { name: "Lisa", age: 32 },
  { name: "Mark", age: 28 }
];
const firstUser2 = users.find(user => user.age > 30);
console.log("First user over 30:", firstUser2);

// 3. Find the first word in an array that has more than 5 characters
const words3 = ["cat", "elephant", "dog", "giraffe"];
const firstLongWord = words3.find(word => word.length > 5);
console.log("First word with more than 5 characters:", firstLongWord);

// 4. Find the first product in an array of objects where the price is less than 20
const products4 = [
  { name: "Notebook", price: 25 },
  { name: "Pen", price: 5 },
  { name: "Backpack", price: 45 }
];
const firstCheapProduct = products4.find(product => product.price < 20);
console.log("First product under $20:", firstCheapProduct);

// 5. Find the first student object in an array whose grade is "A"
const students5 = [
  { name: "davit", grade: "B" },
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "C" }
];
const firstStudent5 = students5.find(student => student.grade === "A");
console.log("First student with grade 'A':", firststudent5);
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
  { name: "ale", isActive: false },
  { name: "Lisa", isActive: true },
  { name: "dato", isActive: false }
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
const strings12 = ["cat", "dog", "elephant", "lion", "tiger"];
const lastWithE = strings1.slice().reverse().find(str => str.includes("e"));
console.log("Last string with 'e':", lastWithE); // "tiger"

// 13. Last user with age under 25
const users13 = [
  { name: "Tom", age: 30 },
  { name: "Lisa", age: 22 },
  { name: "Mark", age: 24 },
  { name: "Nina", age: 26 }
];
const lastYoungUser = users2.slice().reverse().find(user => user.age < 25);
console.log("Last user under 25:", lastYoungUser); // { name: "Mark", age: 24 }

// 14. Last odd number in an array
const values14 = [2, 4, 6, 9, 10, 13, 16];
const lastOdd = values.slice().reverse().find(num => num % 2 !== 0);
console.log("Last odd number:", lastOdd);

// 15. Last word starting with a vowel
const words15 = ["banana", "apple", "orange", "grape", "umbrella"];
const vowels15 = ['a', 'e', 'i', 'o', 'u'];

const lastVowelWord = words15.slice().reverse().find(word => {
  const firstChar = word[0].toLowerCase();
  return vowels15.includes(firstChar);
});

console.log("Last word starting with a vowel:", lastVowelWord);
// 16. Last string ending with "y"
const items16 = ["sunny", "cloud", "rainy", "storm"];
const lastEndsWithY = items16.slice().reverse().find(str => str.endsWith("y"));
console.log("16:", lastEndsWithY);

// 17. Last number divisible by 3
const nums17 = [4, 9, 12, 20, 33];
const lastDivBy3 = nums17.slice().reverse().find(n => n % 3 === 0);
console.log("17:", lastDivBy3);

// 18. Last user with isActive = true
const users18 = [
  { name: "Ana", isActive: false },
  { name: "Ben", isActive: true },
  { name: "Cara", isActive: true }
];
const lastActiveUser = users18.slice().reverse().find(user => user.isActive);
console.log("18:", lastActiveUser);

// 19. Last word with exactly 4 letters
const words19 = ["tree", "bark", "leaf", "sun"];
const lastFourLetterWord = words19.slice().reverse().find(word => word.length === 4);
console.log("19:", lastFourLetterWord);

// 20. Index of number 25
const nums20 = [10, 25, 30];
const index25 = nums20.indexOf(25);
console.log("20:", index25);

// 21. Index of "apple"
const fruits21 = ["banana", "apple", "grape"];
const indexApple = fruits21.indexOf("apple");
console.log("21:", indexApple);

// 22. Index of first "a"
const letters22 = ["b", "a", "c", "a"];
const indexA = letters22.indexOf("a");
console.log("22:", indexA);

// 23. Index of "cat"
const animals23 = ["dog", "cat", "bird"];
const indexCat = animals23.indexOf("cat");
console.log("23:", indexCat);

// 24. Index of 100 (not found)
const nums24 = [10, 20, 30];
const index100 = nums24.indexOf(100);
console.log("24:", index100); // -1

// 25. Last index of 10
const nums25 = [10, 20, 10, 30];
const lastIndex10 = nums25.lastIndexOf(10);
console.log("25:", lastIndex10);

// 26. Last index of "apple"
const fruits26 = ["apple", "banana", "apple"];
const lastIndexApple = fruits26.lastIndexOf("apple");
console.log("26:", lastIndexApple);

// 27. Last index of "a"
const chars27 = ["a", "b", "c", "a"];
const lastIndexA = chars27.lastIndexOf("a");
console.log("27:", lastIndexA);

// 28. Last index of "dog"
const pets28 = ["cat", "dog", "dog"];
const lastIndexDog = pets28.lastIndexOf("dog");
console.log("28:", lastIndexDog);

// 29. Last index of 0
const nums29 = [1, 0, -1, 0, 2];
const lastIndexZero = nums29.lastIndexOf(0);
console.log("29:", lastIndexZero);

// 30. pop() to remove last number
const nums30 = [1, 2, 3];
const removedNum = nums30.pop();
console.log("30:", removedNum);