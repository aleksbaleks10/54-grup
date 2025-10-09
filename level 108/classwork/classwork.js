function checkStringLength(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (str.length % 2 === 0) {
        resolve(str);
      } else {
        reject(str);
      }
    }, 2000); 
  });
}


const promise1 = checkStringLength("GOA");    
const promise2 = checkStringLength("ORIENTED");    
const promise3 = checkStringLength("ACADEMY");  

  Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("Promise.all resolved with:", results);
  })
  .catch((error) => {
    console.log("Promise.all rejected with:", error);
  });



  fetch("https://goa-api.onrender.com/leaders")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });