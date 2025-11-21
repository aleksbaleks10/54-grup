import { square } from './square.js';
import { isEven } from './isEven.js';

const squaredValue = square(5);

const result = isEven(squaredValue);

console.log(result);

const p = document.getElementsByTagName("p")[0];


const savedWord = localStorage.getItem("user word");
if (savedWord) {
  p.textContent = savedWord;
} else {

  const userWord = prompt("Enter word:");
  localStorage.setItem("user word", userWord);
  p.textContent = userWord;
}
