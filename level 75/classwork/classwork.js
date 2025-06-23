const divElement = document.getElementById("myDiv");

const paragraphsInDiv = divElement.getElementsByTagName("p");


for (let i = 0; i < paragraphsInDiv.length; i++) {
  paragraphsInDiv[i].style.color = "green";  
  paragraphsInDiv[i].style.backgroundColor = "black"; 
}

function startIncreasingFont() {
  const paragraph = document.getElementById("myParagraph");
  let fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);

  setInterval(() => {
    fontSize += 1;
    paragraph.style.fontSize = fontSize + "px";
  }, 1000);
}



const button = document.getElementById("moveBtn");
let leftOffset = 0;

button.addEventListener("click", () => {
  setInterval(() => {
    leftOffset -= 50;
    button.style.left = leftOffset + "px";
  }, 1000);
});