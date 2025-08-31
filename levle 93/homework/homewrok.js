console.log("Hello".repeat(3)); // "HelloHelloHello"

console.log("*".repeat(20)); // "********************"

console.log("abc".repeat(4)); // "abcabcabcabc"

function repeat(word, times) {
  return word.repeat(times);
}
console.log(repeat("Hi", 5)); // "HiHiHiHiHi"

console.log("█".repeat(10)); // "██████████"


console.log("The cat chased another cat.".replace("cat", "dog"));
// "The dog chased another cat."

console.log("banana".replace("a", "o"));
// "bonana"ww

console.log("Hello World from JS".replace(" ", "-"));
// "Hello-World from JS"

console.log("12345abc678".replace("1", "#"));
// "#2345abc678"

console.log("Monday is a good day".replace("day", "night"));
// "Monnight is a good day"

console.log("2025-08-17".split("-")); // ["2025", "08", "17"]

console.log("one two three four five".split(" ")); // ["one", "two", "three", "four", "five"]

console.log("John,Doe,25,Developer".split(",")); // ["John", "Doe", "25", "Developer"]

console.log("abc".split("")); // ["a", "b", "c"]

const words = "JavaScript is fun".split(" ");
console.log(words[1]); // "is"