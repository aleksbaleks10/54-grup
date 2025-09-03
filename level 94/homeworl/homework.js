// 3. Check if string starts with "Hello"
function startsWithHello(str) {
  return str.startsWith("Hello");
}

// 4. Check if filename starts with "img_"
function checkImageFile(filename) {
  return filename.startsWith("img_") ? "Image file" : "Not an image file";
}

// 5. Check if sentence starts with "Once upon"
function isFairyTale(sentence) {
  return sentence.startsWith("Once upon");
}

// 6. Check if string starts with a substring at a given position
function startsWithAt(str, substr, position) {
  return str.startsWith(substr, position);
}

// 7. Count how many names start with "Dr."
function countDoctors(names) {
  return names.filter(name => name.startsWith("Dr.")).length;
}
// 8. Remove extra spaces using trim()
function cleanString(str) {
  return str.trim();
}

// 9. Use trimStart() to clean leading spaces
function cleanLeadingSpaces(str) {
  return str.trimStart();
}

// 10. Use trimEnd() to clean trailing spaces
function cleanTrailingSpaces(str) {
  return str.trimEnd();
}

// 11. Clean list of usernames
function cleanUsernames(usernames) {
  return usernames.map(name => name.trim());
}

// 12. Check if input is empty after trimming
function isEmptyAfterTrim(input) {
  return input.trim() === "";
}
// 13. Create empty array and push five numbers
let numbers = [];
numbers.push(1, 2, 3, 4, 5);

// 14. Add two fruits to an array
let fruits = ["apple", "banana"];
fruits.push("mango", "pineapple");

// 15. Push user input strings until "stop"
function collectInputs() {
  let inputs = [];
  let input;
  while ((input = prompt("Enter a string (type 'stop' to end):")) !== "stop") {
    inputs.push(input);
  }
  return inputs;
}

// 16. Add sum of array as last element
function appendSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  arr.push(sum);
  return arr;
}

// 17. Push first 10 even numbers
let evenNumbers = [];
for (let i = 0; evenNumbers.length < 10; i++) {
  if (i % 2 === 0) evenNumbers.push(i);
}