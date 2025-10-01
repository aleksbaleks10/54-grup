// საკლასო დავალება:

// შექმენით ფუნქცია რომელიც:
//     1. ხუთ ელემენტიანი სთრინგების მასივიდან ირჩევს random სთრინგს.
//     2. 3 წამის შემდეგ ბეჭდავს ამ სთრინგს.
function random() {
    const strings = ["გრეიფროტი", "მანდარინი", "ლიმონი", "ფორთოხალი", "ატამი"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    const selectedString = strings[randomIndex];

    setTimeout(() => {
        console.log(selectedString);
    }, 3000); 
}

random();





// საკლასო დავალება:

// შეადგინეთ ფუნქცია სახელად createPromise. ამ ფუნქციას არგუმენტად გადაეცით ერთი რიცხვი.

// თვითონ ფუნქციამ უნდა დააბრუნოს promise. თუ ფუნქციაში გადაცემული რიცხვი მეტია 10-ზე, მოახდინეთ resolve, ხოლო სხვა შემთხვევაში reject.

// resolve-ის დროს მისი არგუმენტი იყოს "resolve", reject-ის დროს მისი არგუმენტი იყოს "reject"

function createPromise(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("resolve");
    } else {
      reject("reject");
    }
  });
}

