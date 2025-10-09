// საკლასო დავალება:

// შექმენით ფუნქცია, სახელად workingOnPromise, რომელსაც გადაეცემა ერთი სთრინგი.

// ფუნქციაში უნდა შეიქმნას promise, რომელიც resolve-ს მაშინ მოახდენს, როდესაც სთრინგის სიგრძე მეტი იქნება 5-ზე, ხოლო სხვა შემთხვევაში მოხდება reject. promise-ში უნდა გქონდეთ ასინქრონული ოპერაცია, ანუ სთრინგის შემოწმება ჩასვით setTimeout-ში.

// თვითონ ფუნქციაშივე promise-ზე გამოიძახეთ then და catch მეთოდები, რომლებიც დაბეჭდავენ დაბრუნებულ ინფორმაციას.

// საბოლოოდ, ფუნქცია გამოიძახეთ 3-ჯერ, განსხვავებული სთრინგებით.
function workingOnPromise(inputString) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputString.length > 5) {
        resolve(` წარმატება: "${inputString}"  გრძელია`);
      } else {
        reject(` შეცდომა: "${inputString}" მოკლეა`);
      }
    }, 1000);
  });

  promise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}

workingOnPromise("🙊"); 
workingOnPromise("🙈");     
workingOnPromise("🙉");      


// საკლასო დავალება:

// შექმენით ფუნქცია, რომელიც დააბრუნებს promise-ს. ამ promise-მა ყოველთვის resolve უნდა მოახდინოს და resolve-ის არგუმენტი უნდა ჰქონდეს "resolved".

// ამ ფუნქციით შექმენით 3 promise და სამივე გადაეცით Promise.all მეთოდის მასივს.
// შემდეგ გაწერეთ მხოლოდ then მეთოდის გამოძახება და მასში უბრალოდ დაბეჭდეთ დაბრუნებული მნიშვნელობა.

function createResolvedPromise() {
  return Promise.resolve("resolved");
}

const promise1 = createResolvedPromise();
const promise2 = createResolvedPromise();
const promise3 = createResolvedPromise();

Promise.all([promise1, promise2, promise3])
  .then(result => {
    console.log(result);
  });