//  Global Scope
let global = "global";

function showGlobal() {
  console.log(global); 
}
showGlobal();

//  Function Scope
function local() {
  let localVar = "local"; 
  console.log(localVar);
}
local();


// Block Scope
if (true) {
  let block = "block"; 
  console.log(block);
}


const str1 = "100px";
const str2 = "25.5kg";

const num1 = parseInt(str1);
const num2 = parseInt(str2); 

console.log(num1); // 100
console.log(num2); // 25