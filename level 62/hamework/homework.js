// Convert a list of strings to uppercase
const words = ["hello", "world", "javascript"];
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords); 

// Square each number in a given list of integers
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);

// Add 5 to each element in a list of numbers
const nums = [10, 20, 30, 40];
const incrementedNums = nums.map(num => num + 5);
console.log(incrementedNums);

// Convert a list of temperatures from Celsius to Fahrenheit
const celsiusTemps = [0, 20, 30, 40];
const fahrenheitTemps = celsiusTemps.map(temp => (temp * 9/5) + 32);
console.log(fahrenheitTemps);

// Extract the first character from each word in a list of strings
const wordsList = ["apple", "banana", "cherry"];
const firstChars = wordsList.map(word => word[0]);
console.log(firstChars);
// Filter out all even numbers from a list of integers
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5, 7, 9]

// Keep only strings longer than 5 characters from a list of words
const words1 = ["apple", "banana", "cat", "elephant", "dog"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // ["banana", "elephant"]

// Filter out negative numbers from a list
const nums1 = [-5, 10, -2, 3, -8, 7];
const positiveNums = nums.filter(num => num >= 0);
console.log(positiveNums); // [10, 3, 7]

// Select names starting with the letter 'A' from a list of names
const names = ["Alice", "Bob", "Anna", "Charlie", "Alex"];
const namesStartingWithA = names.filter(name => name.startsWith("A"));
console.log(namesStartingWithA); // ["Alice", "Anna", "Alex"]

// Keep only numbers divisible by 3 in a given list
const numbersList = [1, 3, 5, 6, 9, 12, 15, 20];
const divisibleByThree = numbersList.filter(num => num % 3 === 0);
console.log(divisibleByThree); // [3, 6, 9, 12, 15]