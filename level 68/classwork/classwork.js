function logicalFunc(bool1, bool2) {
    console.log(`{bool1} AND {bool2} ->`, bool1 && bool2);
    console.log(`{bool1} OR {bool2} ->`, bool1 || bool2);
    console.log("------");
}

logicalFunc(true, false);
logicalFunc(false, false);
logicalFunc(true, true);

function typeConvert() {
    let userInput = prompt("შეიყვანეთ რიცხვი:");
    
    console.log("მომხმარებლის შეყვანილი:", userInput);

    let number = Number(userInput);
    
    console.log("მონაცემთა ტიპის შეცვლის შემდეგ:", number);
    console.log("მონაცემთა ტიპი:", typeof number);
}
typeConvert();


function forConditions() {
    let userNum = Number(prompt("Enter number:"));

    if (userNum < 18) {
        console.log("You are not adult");
    } else if (userNum < 65) {
        console.log("You are adult and not old");
    } else if (userNum <= 113) {
        console.log("You are retired");
    } else {
        console.log("Lie");
    }
}

forConditions();