// 1საკლასო დავალება:
// Given an array of 10 words, filter out only those that start with the letter "a".
const words = ["apple", "banana", "avocado", "cherry", "apricot", "grape", "almond", "blueberry", "ananas", "kiwi"];
const startsWithA = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].startsWith("a")) {
    startsWithA.push(words[i]);
  }
}

console.log("სიტყვები, რომლებიც იწყება 'a'-ზე:");

// 2საკლასო დავალება:
// Ask the user for their first name with extra spaces only at the beginning. Use trimStart() to clean it and display the result.
// Ask the user for their last name with extra spaces only at the end. Use trimEnd() to clean it and display the result.
const rawFirstName = prompt("შეიყვანე შენი სახელი (დასაწყისში ზედმეტი სივრცით):");
let firstName = rawFirstName;
while (firstName[0] === " ") {
  firstName = firstName.slice(1);
}
console.log("გასუფთავებული სახელი:", `"${firstName}"`);

const rawLastName = prompt("შეიყვანე შენი გვარი (ბოლოში ზედმეტი სივრცით):");
let lastName = rawLastName;
while (lastName[lastName.length - 1] === " ") {
  lastName = lastName.slice(0, lastName.length - 1);
}
console.log("გასუფთავებული გვარი:", `"${lastName}"`);