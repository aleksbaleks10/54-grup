let i = 1;
while (i <= 20) {
  i++;
  if (i >= 10 && i <= 15) {
    i++;
    continue;
  }
  console.log(i);
}

const isEven = (num) => {
  if (typeof num !== 'number') {
    return 'გთხოვ შეიყვანო რიცხვი';
  }
  return num % 2 === 0;
};

console.log(isEven(4)); 
console.log(isEven(7)); 
console.log(isEven('hello'));

function processParams(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
  let params = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

  for (let i = 0; i < params.length; i++) {
    if (typeof params[i] === "number") {
      console.log(params[i]);
    } else if (typeof params[i] === "string") {
      params[i] = 1;
    }
  }

  console.log("შეცვლილი მასივი:", params);
}

processParams(42, "hello", 7, "world", 0, "js", 9, "მახარაძე", 11, "ალექსანდრე");