// 2) Determine if a number is even or odd
let num1 = parseInt(prompt("Enter a number:"));
console.log(num % 2 === 0 ? "Even" : "Odd");

// 3) Assign a grade based on a score
let score = parseInt(prompt("Enter a score:"));
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// 4) Determine the largest among three numbers
let num2 = Number(prompt("Enter number: "))
let num3 = Number(prompt("Enter number: "))
let num4 = Number(prompt("Enter number: "))
if (num1 > num2 && num1 > num3 ) {
    console.log("First number is the largest")
} else if (num2 > num1 && num2 > num3) {
    console.log("Second number is the largest")
} else if (num3 > num1 && num3 > num2) {
    console.log("Third number is the largest")
} else if (num1 === num2 && num2 === num3) {
    console.log("Numbers are equal")
}
// 5) Check if a character is a vowel or consonant
let char = prompt("Enter a character:").toLowerCase();
console.log("aeiou".includes(char) ? "Vowel" : "Consonant");

// 6) Check if a number is divisible by 3 and 5
num = parseInt(prompt("Enter a number:"));
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else if (num % 3 === 0) {
    console.log("Divisible by 3 only");
} else if (num % 5 === 0) {
    console.log("Divisible by 5 only");
} else {
    console.log("Not divisible by either");
}

// 7) Check age category
let age = parseInt(prompt("Enter age:"));
if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior");
}
// 8) Print numbers from 1 to 5 using a while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// 9) Print even numbers from 2 to 10 using a while loop
let num = 2;
while (num <= 10) {
    console.log(num);
    num += 2;
}

// 10) Print numbers from 10 down to 1 using a while loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// 11) Print numbers from 1 to 10 using a for loop
for (let k = 1; k <= 10; k++) {
    console.log(k);
}

// 12) Print the first 5 multiples of 3 using a for loop
for (let m = 3; m <= 15; m += 3) {
    console.log(m);
}

// 13) Print numbers from 10 to 1 in reverse using a for loop
for (let n = 10; n >= 1; n--) {
    console.log(n);
}

// 14) Print all even numbers between 1 and 20 using a for loop
for (let p = 2; p <= 20; p += 2) {
    console.log(p);
}

// 15) Print the sum of numbers from 1 to 5 using a for loop
let sum = 0;
for (let q = 1; q <= 5; q++) {
    sum += q;
}
console.log("Sum:", "sum");