function caseObj() {
  const text = prompt("შეიყვანეთ სტრინგი:");
  const caseObj = { type: prompt("რომელ ქეისში გსურთ გადაყვანა? (lower/l ან upper/u):") };

  if (caseObj.type.toLowerCase() === "lower" || caseObj.type.toLowerCase() === "l") {
    console.log(text.toLowerCase());
  } else if (caseObj.type.toLowerCase() === "upper" || caseObj.type.toLowerCase() === "u") {
    console.log(text.toUpperCase());
  } else {
    console.log(" აიღჩიეთ თქვენი სასურველი case: lower/l ან upper/u.");
  }
}
const items = [" shoes", " jacket", "phone", " watch", "hat"];


for (let i =0; i < items.length; i++) {
    if(items[i].includes("new")) {
        console.log(items[i])
    }


}

function index1(str, char) {
  const index = str.lastIndexOf(char);
  return index !== -1 ? index : -1;
}

console.log(index1("hello world", "o")); 
console.log(index1("hello world", "z")); 