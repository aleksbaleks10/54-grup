let myObj = {
    name: "David",
    surname: "Tezelashvili",
    academy: "GOA",
    isMentor: true,
    num: 100,
    hobbies: ["programming", "bike", "basketball"],
    favColor: "Blue"
};

let ul = document.getElementById("myList");

for (let key in myObj) {

    let keyItem = document.createElement("li");
    keyItem.textContent = "Key: " + key;
    ul.appendChild(keyItem);

    let valueItem = document.createElement("li");
    
    let value = Array.isArray(myObj[key]) ? myObj[key].join(", ") : myObj[key];
    valueItem.textContent = "Value: " + value;
    ul.appendChild(valueItem);
}


const myArray = ["მთვარე", "მზე", 20, 5, true, false];

for (const item of myArray) {
  if (typeof item === "string") {
    console.log(item);
  } else if (typeof item === "number") {
    console.log(item + 10);
  } else if (typeof item === "boolean") {
    console.log(!item);
  }
}