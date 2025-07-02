// 1)
const name = "Ada";
let age = 30;

// 2)
function greet(user) {
  return `Hello, ${user}!`;
}

// 3)
if (age >= 18) {
  console.log(greet(name));
} else {
  console.log("You're too young to enter.");
}

// 4)
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}
// 5) 
const num1 = 7;
const num2 = 5;
const sum = num1 + num2;
const product = num1 * num2;
console.log(`(5) The numbers are ${num1} and ${num2}. Their sum is ${sum}, and their product is ${product}.`);

// 6) 
const lightColor = "yellow";
console.log("(6)", lightColor);
switch (lightColor) {
  case "red":
    console.log("Stop the car.");
    break;
  case "yellow":
    console.log("Prepare to stop.");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Invalid traffic light color.");
}

// 7) 
const operation = "multiply";
const a = 8;
const b = 3;
console.log(`(7) Operation: ${operation}`);
switch (operation) {
  case "add":
    console.log(`${a} + ${b} = ${a + b}`);
    break;
  case "subtract":
    console.log(`${a} - ${b} = ${a - b}`);
    break;
  case "multiply":
    console.log(`${a} * ${b} = ${a * b}`);
    break;
  case "divide":
    console.log(`${a} / ${b} = ${a / b}`);
    break;
  default:
    console.log("Unknown operation.");
}

// 8)
const month = "March";
console.log(`(8) Month: ${month}`);
switch (month) {
  case "December":
  case "January":
  case "February":
    console.log("Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("Summer");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month.");
}

// 9)
const userRole = "editor";
console.log(`(9) Role: ${userRole}`);
switch (userRole) {
  case "admin":
    console.log("Full access granted.");
    break;
  case "editor":
    console.log("Edit access granted.");
    break;
  case "subscriber":
    console.log("Read-only access granted.");
    break;
  default:
    console.log("Unknown role.");
}