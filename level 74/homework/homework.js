// 1. Change text on button click
const textBtn = document.getElementById("textBtn");
const textPara = document.getElementById("textPara");
textBtn.addEventListener("click", () => {
  textPara.textContent = "New text!";
});

// 2. Background color changer every 2 seconds
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
setInterval(() => {
  document.body.style.backgroundColor = getRandomColor();
}, 2000);

// 3. Add Names to List
const nameInput = document.getElementById("nameInput");
const addNameBtn = document.getElementById("addNameBtn");
const nameList = document.getElementById("nameList");

addNameBtn.addEventListener("click", () => {
  if (nameInput.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = nameInput.value;
  nameList.appendChild(li);
  nameInput.value = "";
});

// 4. Digital Clock
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB"); // HH:MM:SS
  document.getElementById("clockDisplay").textContent = time;
}
setInterval(updateClock, 1000);

// 5. Array of Colors - Cycle through on click
const colors = ["#f44336", "#2196F3", "#4CAF50", "#FFEB3B"];
let colorIndex = 0;
const colorCycleBtn = document.getElementById("colorCycleBtn");

colorCycleBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});