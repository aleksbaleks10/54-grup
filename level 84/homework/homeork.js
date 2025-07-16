// 2
let str = "JavaScript";
console.log("First character:", str.charAt(0));
// 3
let userStr = prompt("Enter a string:");
console.log("Third character:", userStr.charAt(2));
// 4
let isCapital = /^[A-Z]/.test(str.charAt(0));
console.log("Starts with capital:", isCapital);
// 5
let mixed = "Fun With CODE";
console.log("Lowercase:", mixed.toLowerCase());
// 6
let inputLower = prompt("Type anything:");
console.log("Lowercase version:", inputLower.toLowerCase());
// 7
let s1 = "Match";
let s2 = "MATCH";
console.log("Equal ignoring case:", s1.toLowerCase() === s2.toLowerCase());

// 8
let whisper = "can you hear me?";
console.log("Uppercase:", whisper.toUpperCase());
// 9
let userName = prompt("What's your name?");
alert("Your name in uppercase: " + userName.toUpperCase());
// 10
let a = "hello", b = "HELLO";
console.log("Equal ignoring case:", a.toUpperCase() === b.toUpperCase());

// 11
let greet = "Good ";
let time = "morning";
console.log("Greeting:", greet.concat(time));
// 12
let first = prompt("First name:");
let last = prompt("Last name:");
console.log("Full name:", first.concat(" ", last));
// 13
let s = "Coding";
let v = "is";
let adj = "fun!";
console.log("Sentence:", s.concat(" ", v, " ", adj));

// 14
let task = "Finished: done";
console.log("Ends with 'done':", task.endsWith("done"));
// 15
let shout = prompt("Express something:");
console.log("Ends with '!':", shout.endsWith("!"));
// 16
let filename = prompt("Enter a filename:");
if (filename.endsWith(".jpg")) {
  console.log("It's a JPG file.");
} else {
  console.log("Not a JPG file.");
}