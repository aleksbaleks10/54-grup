//1
const paragraph = document.getElementById("colorParagraph");
const button = document.getElementById("changeColorBtn");

const colors = ["red", "blue", "green", "orange", "purple"];

function chooseRandomColor(colorArray) {
  const randomIndex = parseInt(Math.random() * colorArray.length); 
  return colorArray[randomIndex];
}

button.addEventListener("click", function() {
  const selectedColor = chooseRandomColor(colors);
  paragraph.style.color = selectedColor;
});


//2
const allp = document.getElementsByTagName("p");
for (let i = 0; i < allp.length; i++){
        allp [i].textContent = "level 100, GOA best"
}

//3
const fruits = ['apple', 'banana', 'cherry'];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);