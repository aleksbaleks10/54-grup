let adress = {
  name: "aleks",
  age: "10",
  year: 2015,
  fav_color: "black"
};

let printObjectValues = function(obj) {
  for (let key in obj) {
    console.log(obj[key]);
  }
};

printObjectValues(adress);



const X_x = ((arr) => {
  return arr.reduce((acc, num) => acc * num, 1);
})([2, 3, 4]);

console.log(X_x); 

(function(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
})("╰(*°▽°*)╯")