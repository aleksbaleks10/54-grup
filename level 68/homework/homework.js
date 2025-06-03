let a = 12;
let b = 15;

let bothGreaterThan10 = a > 10 && b > 10;

let x = 8;
let y = 12;
let atLeastOneTrue = x > 10 || y > 10;

let isTrue = true;
let isFalse = !isTrue;

let num = 15;
let complexCondition = (num > 10 && num < 20) || num === 25;

console.log("Both numbers greater than 10:", bothGreaterThan10);
console.log("At least one condition is true:", atLeastOneTrue);
console.log("Inverted boolean value:", isFalse);
console.log("Complex condition result:", complexCondition);

let num1 = 42;
let numToString = String(num);


let boolValue = true;
let boolToString = String(boolValue);

let numericString = "123";
let stringToNumber = Number(numericString);

let trueToNumber = Number(true);  // 1
let falseToNumber = Number(false); // 0

let nonNumericString = "hello";
let invalidConversion = Number(nonNumericString);

console.log("Number to string:", numToString);
console.log("Boolean to string:", boolToString);
console.log("String to number:", stringToNumber);
console.log("True to number:", trueToNumber);
console.log("False to number:", falseToNumber);
console.log("Non-numeric string to number:", invalidConversion);

let number = prompt("Enter a number:");
number = Number(number);

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

let age = prompt("Enter your age:");
age = Number(age);

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You are not eligible to vote.");
}

let num2 = prompt("Enter the first number:");
let num3 = prompt("Enter the second number:");
num2 = Number(num2);
num3 = Number(num3);

if (num2 > num3) {
    console.log("The first number is larger.");
} else if (num2 < num3) {
    console.log("The second number is larger.");
} else {
    console.log("Both numbers are equal.");
}