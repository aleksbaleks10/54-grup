let count = 0;
let myName = "aleks";

let intervalId = setInterval(function() {
  console.log(myName);
  count++;
  if (count === 4) {
    clearInterval(intervalId);
  }
}, 5000);

const myArray = ["გამარჯობა", 42, true, { სახელი: "aleqsandre", ასაკი: 10 }];

console.log(myArray);

console.log(myArray[2]);

function printElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
let myArray1= [10, 20, 30, 40, 50];
printElements(myArray1);level = 74/classwork