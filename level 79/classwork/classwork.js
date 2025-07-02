
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenSum = 0;
let oddSum = 0;

for (const num of numbers) {
  if (num % 2 === 0) {
    evenSum += num;
  } else {
    oddSum += num;
  }
}

console.log("ლუწების ჯამი:", evenSum);
console.log("კენტების ჯამი:", oddSum);





const names = ['john', 'mike'];
const capitalizedNames = [];

for (let name of names) {
  capitalizedNames.push(name[0].toUpperCase() + name.slice(1));
}

console.log(capitalizedNames.join(', '));







const names1 = ['john', 'mike'];
const capitalizedNames2 = [];

for (let name of names) {
  capitalizedNames.push(name[0].toUpperCase() + name.slice(1));
}

console.log(capitalizedNames.join(', '));








function countVowels(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const input = "Hello, world!";
console.log("Number of vowels:", countVowels(input));









const numbers1 = [1, 2, 3, 4, 5];
const doubled = [];

for (const num of numbers) {
  doubled.push(num * 2);
}

console.log(doubled); 