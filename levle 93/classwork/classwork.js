// // 1
// საკლასო დავალება:

// მომხმარებელს ჯერ შემოატანინეთ საწყისი სთრინგი, შემდეგ შესაცვლელი ნაწილი და ბოლოს რითი უნდა შეცვალოს. შემდეგ შეეკითხეთ მხოლოდ ერთხელ უნდა შეცვლა და ყველა შემხვედრზე.

// თუ ის ერთს აირჩევს, გამოიყენეთ replace მეთოდი საწყის სთრინგზე, ხოლო სხვა შემთხვევაში replaceAll მეთოდი. საბოლოოდ კი კონსოლში დაბეჭდეთ მიღებული შედეგი.

const originalString = prompt("შეიყვანე საწყისი სტრინგი:");
const toReplace = prompt("რომელი ნაწილი გინდა შეცვალო?");
const replacement = prompt("რით გინდა შეცვალო?");
const mode = prompt("გინდა მხოლოდ ერთხელ შეცვლა (one) თუ ყველა შემხვედრის (all)?");

let result;

if (mode.toLowerCase() === "one") {
  result = originalString.replace(toReplace, replacement);
} else {
  result = originalString.replaceAll(toReplace, replacement);
}

console.log("შედეგი:", result);


// 2საკლასო დავალება:
// Given an array of numbers from 1 to 20, use slice to extract every number from the 5th element up to (but not including) the 15th element.
// Create an array of random numbers. Use slice to remove the first and last elements, leaving only the "middle part".
const numbers = [];
for (let i = 1; i <= 20; i++) {
  numbers.push(i);
}

const sliced = numbers.slice(4, 14); 
console.log("Slice 5-დან 15-მდე:", sliced);

// 3საკლასო დავალება:
// Split the string "apple,banana,orange" into an array of fruits.
// Split the string "Hello World" into an array of words.
// Split the string "a-b-c-d-e" into individual letters using "-" as the separator.

const fruits = "apple,banana,orange".split(",");
console.log("ხილები:", fruits);