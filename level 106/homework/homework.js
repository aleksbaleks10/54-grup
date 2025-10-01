function createPromise(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("resolve");
    } else {
      reject("reject");
    }
  });
}

function successHandler(message) {
  console.log(message);
}

function failureHandler(error) {
  console.log(error);
}

createPromise(4).then(successHandler, failureHandler); 
createPromise(5).then(successHandler, failureHandler); 