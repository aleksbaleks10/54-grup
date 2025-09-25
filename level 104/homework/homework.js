// 2
const person = {
  name: "aleks",
  age: 10,
  city: "Tbilisi",
  hobby: "programming"
};
console.log(Object.keys(person));

// 3
console.log(Object.keys(person).length);

// 4
function getUppercaseKeys(obj) {
  return Object.keys(obj).map(key => key.toUpperCase());
}
console.log(getUppercaseKeys(person));

// 5
console.log(Object.keys(person).includes("age"));

// 6
const nestedObj = {
  user: { name: "Bob", age: 25 },
  settings: { theme: "dark", notifications: true },
  stats: { score: 100, level: 5 }
};
console.log(Object.keys(nestedObj));

// 7
const product = {
  name: "Laptop",
  price: 1200,
  stock: 50,
  brand: "Pro",
  rating: 4.5
};
console.log(Object.values(product));

// 8
console.log(Object.values(product).length);

// 9
function getNumericValues(obj) {
  return Object.values(obj).filter(val => typeof val === "number");
}
console.log(getNumericValues(product));

// 10
console.log(getNumericValues(product).reduce((acc, val) => acc + val, 0));

// 11
console.log(Object.values(product).includes("TechPro"));

// 12
const scores = {
  math: 95,
  english: 88,
  science: 92,
  history: 76,
  art: 85
};
console.log(Object.entries(scores));

// 13
function printKeyValuePairs(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}
printKeyValuePairs(scores);

// 14
console.log(Object.entries(scores).map(([key, value]) => `${key}=${value}`));

// 15
function filterValuesGreaterThan10(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value > 10));
}
console.log(filterValuesGreaterThan10(scores));

// 16
function swapKeysAndValues(obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}
console.log(swapKeysAndValues(scores));

// 17
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};
console.log(car.hasOwnProperty("model"));

// 18
console.log(car.hasOwnProperty("color"));

// 19
console.log(car.hasOwnProperty("toString"));

// 20
car.color = "blue";
console.log(Object.hasOwn(car, "color"));

// 21
delete car.year;
console.log(car.hasOwnProperty("year"));