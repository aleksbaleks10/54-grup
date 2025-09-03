// ვქმნი 10 რიცხვიან array-ს
const numbers = [12, 45, 67, 23, 89, 34, 21, 49, 70, 38];

// 1) ვპოულობ პრიველ რიცხვს რომელიც მეტია 50-ზე
const greaterThan50 = numbers.find(num => num > 50);

// 2) ვპოულობთ პირველ რიცხვს რომელიც გაიყოფა 7-ზე
const divisibleBy7 = numbers.find(num => num % 7 === 0);

// აქ გამოიტანს შედეგებს
console.log("პირველი რიცხვი, რომელიც მეტია 50-ზე:", greaterThan50);
console.log("პირველი რიცხვი, რომელიც გაიყოფა 7-ზე:", divisibleBy7);


const array = ['apple', 'banana', 'cherry'];

// ვცვლი მეორე ელემენტს (ანუ 1st index) ახალით
array.splice(1, 1, 'orange');

console.log(array); // პასუხი == 1st==apple 2nd==orange 3rd==cherry(ზუსტად ესე არა მარა ეგეთი თანმიმდევრობით
let numbers2 = [10, 20, 30, 40, 50];

// ვშლი ბოლო ელემენტს
let removed = numbers2.pop();

// ვბეჭდავ წაშლილ მნიშვნელობას
console.log("Removed value:", removed);

// ვბეჭდავ განახლებულ მასივს
console.log("Updated array:", numbers2);
