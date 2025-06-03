function usingWhileLoop() {
    let num = 0;
    while (num < 100) {
        console.log(num);
        num++;
    }
}

usingWhileLoop();

function correctUserPassword() {
    let correctPassword = "12345678910";
    let userPassword;
    let attempts = 0;

    while (userPassword !== correctPassword) {
        userPassword = prompt("შეიყვანეთ პაროლი:");
        attempts++;
    }

    alert("Correct guess! ცდების რაოდენობა: {attempts}");
}

correctUserPassword(); 

for (let i = 0; i < 10; i++) {
    console.log("ალექსანდრე მახარაძე");
}