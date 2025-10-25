// 8)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); 
// 9)
const original = { name: "Alice", age: 25 };
const copy = { ...original, age: 30 };
console.log(copy);  
console.log(original); 
// 10)
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); 
//11
const user = { id: 1, name1: "aleks", email: "aleks.makharadze@gmail.com" };
const { name1, ...rest } = user;

console.log(name1); 
console.log(rest);