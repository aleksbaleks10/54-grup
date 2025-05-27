// 1)
function logicalFunc(bool1, bool2) {
    console.log(bool1, bool2)
    console.log(bool1 && bool2)
    console.log(bool1 || bool2)
}

logicalFunc(true, false)
logicalFunc(false, false)
logicalFunc(true, true)
// 2)
function typeConvert() {
    let userInput = prompt("შენი რიცხვი:");

    console.log("მისი შეყვანილი მონაცემი:", userInput);

    let convertNumber = Number(userInput);

    console.log("გადაკეთებული მნიშვნელობა:", convertNumber);
    console.log("მონაცემთა ტიპი:", typeof convertNumber);
}

typeConvert();
// 3)
function forConditions() {
    let userNum = Number(prompt("Enter your age:"));

    if (userNum < 18) {
        console.log("not adult");
    } else if (userNum < 65) {
        console.log("adult & not old");
    } else if (userNum < 113) {
        console.log("retired");
    } else {
        console.log("lie");
    }
}