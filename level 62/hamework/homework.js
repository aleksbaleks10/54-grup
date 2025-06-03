// Convert a list of strings to uppercase
const strings = ["hello", "world", "javascript"];
const uppercaseStrings = strings.map(str => str.toUpperCase());
console.log(uppercaseStrings);

// Square each number in a given list of integers
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); 

// Add 5 to each element in a list of numbers
const numList = [10, 20, 30, 40, 50];
const incrementedNumbers = numList.map(num => num + 5);
console.log(incrementedNumbers); 

// Convert a list of temperatures from Celsius to Fahrenheit
const celsiusTemperatures = [0, 20, 30, 40];
const fahrenheitTemperatures = celsiusTemperatures.map(c => (c * 9/5) + 32);
console.log(fahrenheitTemperatures);

// Extract the first character from each word in a list of strings
const words = ["apple", "banana", "cherry"];
const firstChars = words.map(word => word[0]);
console.log(firstChars);