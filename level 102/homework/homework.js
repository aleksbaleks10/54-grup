// 1. Create a Date object and log only its seconds
const nowSeconds = new Date();
console.log("1. Seconds:", nowSeconds.getSeconds());

// 2. Display the current seconds in an alert box
alert("2. Current seconds: " + new Date().getSeconds());

// 3. Function that returns the seconds of a given Date object
function getSeconds(date) {
  return date.getSeconds();
}
console.log("3. getSeconds(new Date()):", getSeconds(new Date()));

// 4. Compare the seconds of two different Date objects
const date1 = new Date();
const date2 = new Date(Date.now() + 4000); // 4 seconds later
console.log("4. Seconds comparison:", getSeconds(date1) === getSeconds(date2) ? "Same" : "Different");

// 5. Print the seconds every second using setInterval()
setInterval(() => {
  console.log("5. Seconds:", new Date().getSeconds());
}, 1000);


// 6. Create a Date object and log only its month
const nowMonth = new Date();
console.log("6. Month:", nowMonth.getMonth()); // 0 = January

// 7. Display the current month in an alert box
alert("7. Current month: " + new Date().getMonth());

// 8. Function that returns the month of a given Date object
function getMonth(date) {
  return date.getMonth();
}
console.log("8. getMonth(new Date()):", getMonth(new Date()));

// 9. Compare the months of two different Date objects
const d1 = new Date("2025-09-21");
const d2 = new Date("2025-12-25");
console.log("9. Month comparison:", getMonth(d1) === getMonth(d2) ? "Same" : "Different");

// 10. Print the current month every 5 seconds using setInterval()
setInterval(() => {
  console.log("10. Month:", new Date().getMonth());
}, 5000);