let nums1 = [1, 2, 3, 4, 5];
console.log(nums1.reverse());

let fruit2 = ["apple", "banana", "cherry"];
let reversedFruits2 = fruit2.reverse();
console.log(reversedFruits2[0]);

let chars3 = ["o", "l", "l", "e", "h"];
let word3 = chars3.reverse().join("");
console.log(word3);

let numbers4 = [3, 7, 2, 9];
let reversedNumbers4 = numbers4.reverse();
let maxVal4 = Math.max(...reversedNumbers4);
console.log(maxVal4);

let items5 = ["one", "two", "three"];
let joined5 = items5.reverse().join(",");
console.log(joined5);

let fruits6 = ["mango", "kiwi", "grape"];
fruits6.shift();

let nums7 = [10, 20, 30];
nums7.shift();
console.log(nums7);

let colors8 = ["red", "blue", "green"];
let removed8 = colors8.shift();
console.log(removed8);

let queue9 = ["task1", "task2", "task3"];
while (queue9.length > 0) {
  console.log(queue9.shift());
}

let mixed10 = [42, "hello", true];
mixed10.shift();

let fruits11 = ["apple", "orange", "pear"];
console.log(fruits11.join(","));

let nums12 = [1, 2, 3];
console.log(nums12.join(" "));

let words13 = ["make", "it", "work"];
console.log(words13.join("-"));

let letters14 = ["C", "o", "d", "e"];
console.log(letters14.join(""));

let names15 = ["Alice", "Bob", "Charlie"];
console.log(names15.join(" | "));

console.log(Math.abs(5));
console.log(Math.abs(-8));

let mixedNums18 = [-3, 4, -1];
let absNums18 = mixedNums18.map(Math.abs);
console.log(absNums18);

let diff19 = Math.abs(10 - 25);
console.log(diff19);

let num20 = -12;
console.log(Math.abs(num20));

console.log(Math.ceil(4.2));
console.log(Math.ceil(-4.7));

let decimals23 = [1.1, 2.5, 3.9];
let rounded23 = decimals23.map(Math.ceil);
console.log(rounded23);

let result24 = Math.ceil(7 / 2);
console.log(result24);

let price25 = 19.99;
let taxRate25 = 0.08;
let total25 = price25 * (1 + taxRate25);
console.log(Math.ceil(total25));

console.log(Math.floor(4.9));
console.log(Math.floor(-4.2));

let decimals29 = [1.9, 2.5, 3.1];
let floored29 = decimals29.map(Math.floor);
console.log(floored29);

let floorDiv30 = Math.floor(10 / 3);
console.log(floorDiv30);

let price31 = 50;
let discount31 = 0.15;
let discountedPrice31 = price31 * (1 - discount31);
console.log(Math.floor(discountedPrice31));

console.log(Math.round(4.6));
console.log(Math.round(-4.3));

let decimals34 = [1.2, 2.8, 3.5];
let rounded34 = decimals34.map(Math.round);
console.log(rounded34);

let roundedDiv35 = Math.round(7 / 2);
console.log(roundedDiv35);

let basePrice36 = 19.99;
let taxRate36 = 0.08;
let totalPrice36 = basePrice36 * (1 + taxRate36);
console.log(Math.round(totalPrice36));

console.log(Math.max(10, 20));
console.log(Math.max(5, 12, 8));

let nums39 = [3, 7, 2];
let manualMax39 = Math.max(...nums39);
console.log(manualMax39);

let positives40 = [1, 4, 9, 2];
console.log(Math.max(...positives40));

let mixed41 = [-5, 3, 0, -2, 8];
console.log(Math.max(...mixed41));

console.log(Math.min(10, 20));
console.log(Math.min(5, 12, 8));

let nums44 = [3, 7, 2];
let manualMin44 = Math.min(...nums44);
console.log(manualMin44);

let positives45 = [1, 4, 9, 2];
console.log(Math.min(...positives45));

let mixed46 = [-5, 3, 0, -2, 8];
console.log(Math.min(...mixed46));

console.log(Math.pow(2, 3));
console.log(Math.sqrt(5));
console.log(Math.pow(4, 3));

let base50 = 7;
let exponent50 = 2;
console.log(Math.pow(base50, exponent50));

let nums51 = [1, 2, 3, 4];
let squared51 = nums51.map(n => Math.pow(n, 2));
console.log(squared51);