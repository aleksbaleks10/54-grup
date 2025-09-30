for (let num of [1, 2, 3, 4, 5]){
    setTimeout(() => console.log(num), 1000*num)
}



new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task complete");
  }, 3000);
});


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Task complete"), 3000);
});

console.log(myPromise);

setTimeout(() => console.log(myPromise), 2900); 