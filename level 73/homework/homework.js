// 1. Log numbers from 1 to 5 every second
let count1 = 1;
const interval1 = setInterval(() => {
  console.log(`Count: {count1}`);
  if (count1++ === 5) clearInterval(interval1);
}, 1000);

// 2. Message every 2 seconds, stop after 10 seconds
const interval2 = setInterval(() => {
  console.log("Hello every 2 seconds!");
}, 2000);
setTimeout(() => clearInterval(interval2), 10000);

// 3. Change background color every 3 seconds, stop after 5 changes
let colorChanges = 0;
const colors = ["red", "green", "blue", "yellow", "purple"];
const interval3 = setInterval(() => {
  document.body.style.backgroundColor = colors[colorChanges % colors.length];
  colorChanges++;
  if (colorChanges === 5) clearInterval(interval3);
}, 3000);

// 4. Display current time every second, stop after 15 seconds
const interval4 = setInterval(() => {
  console.log(`Time: {new Date().toLocaleTimeString()}`);
}, 1000);
setTimeout(() => clearInterval(interval4), 15000);

// 5. Timer up to 10 seconds
let seconds = 0;
const interval5 = setInterval(() => {
  console.log(`Timer: {++seconds}s`);
  if (seconds === 10) clearInterval(interval5);
}, 1000);