function changeColor() {
    let userColor = prompt("შეიყვანეთ ფერი:");
    if (userColor) {
        document.getElementById("colorButton").style.backgroundColor = userColor;
    }
}

function validateForm() {
    let inputValue = document.getElementById("userInput").value;
    if (inputValue === "true") {
        alert("logged in");
    } else{
        alert("try again");
    }
}

document.getElementById("colorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let textColor = document.getElementById("textColor").value;
    let bgColor = document.getElementById("bgColor").value;
    
    document.body.style.color = textColor;
    document.body.style.backgroundColor = bgColor;
});