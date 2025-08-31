// 4) მოცემულია რიცხვების მასივი:

// const numbers = [2, 4, 6, 8, 10];


// დავალება: შეამოწმე, ყველა რიცხვი ლუწია თუ არა every() მეთოდის გამოყენებით
const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); //true


// 5) .filter()

// მოცემულია სტუდენტების ობიექტების მასივი:

// const students = [
//   { name: "Nika", grade: 85 },
//   { name: "Ana", grade: 45 },
//   { name: "Gio", grade: 70 },
//   { name: "Mariam", grade: 30 }
// ];
// დავალება: გაფილტრე სტუდენტები, რომლებმაც 50 ქულაზე მეტი მიიღეს.
    const students = [
  { name: "Nika", grade: 85 },
  { name: "Ana", grade: 45 },
  { name: "Gio", grade: 70 },
  { name: "Mariam", grade: 30 }
];

const passedStudents = students.filter(student => student.grade > 50);

console.log(passedStudents);

// 6) .find()

// მოცემულია პროდუქტების მასივი:

// const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Phone", price: 800 },
//   { id: 3, name: "Headphones", price: 150 }
// ];


// დავალება: მოძებნე პროდუქტი, რომლის ფასი 800-ია.

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 150 }
];

const Product2 = products.find(product => product.price === 800);

console.log(Product2);

