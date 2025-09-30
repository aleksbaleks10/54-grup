// 2-6)

// Write a function that logs "Hello after 2 seconds" using setTimeout.
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
// Schedule two messages: one after 1 second and another after 3 seconds.
setTimeout(() => {
  console.log("Message after 1 second");
}, 1000);

setTimeout(() => {
  console.log("Message after 3 seconds");
}, 3000);
// Chain three setTimeout calls so that they log "First", "Second", "Third" in sequence, each 2 seconds apart.
setTimeout(() => {
  console.log("First");
  setTimeout(() => {
    console.log("Second");
    setTimeout(() => {
      console.log("Third");
    }, 2000);
  }, 2000);
}, 2000);
// Create a countdown from 5 to 1, where each number appears every second using setTimeout.
for (let i = 5; i >= 1; i--) {
  setTimeout(() => {
    console.log(i);
  }, (6 - i) * 1000);
}
// Write a function that delays execution of another function by a random time between 1–5 seconds.
function delayRandom(fn) {
  const delay = Math.floor(Math.random() * 5 + 1) * 1000;
  setTimeout(fn, delay);
}

// Example usage:
delayRandom(() => {
  console.log("Executed after random delay");
});