// let body = document.body;
// let btn = document.createElement("button");
// btn.textContent = "დაწყება";
// let div = document.createElement("div");

// body.appendChild(btn);
// body.appendChild(div);

// let counter = 1;
// let width = 300;
// let height = 300;

// btn.addEventListener('click', function() {
//     div.style.width = width + 'px';
//     div.style.height = height + 'px';
//     div.style.backgroundColor = 'red';
//     div.style.transition = 'all 0.5s ease';

//     let interval = setInterval(function() {
//         // p ელემენტის შექმნა
//         let p = document.createElement("p");
//         let text = document.createTextNode("p" + counter);
//         p.appendChild(text);
//         body.appendChild(p);
//         counter++;

//         // ზომის შემცირება
//         width -= 10;
//         height -= 10;
//         div.style.width = width + 'px';
//         div.style.height = height + 'px';

//         // div-ის გაქრობა როცა ძალიან პატარა გახდება
//         if (width <= 0 || height <= 0) {
//             clearInterval(interval);
//             div.style.display = "none";
//         }
//     }, 3000);
// });

let body = document.body;
let btn = document.createElement("button");
btn.textContent = "დაწყება";
let div = document.createElement("div");

body.appendChild(btn);
body.appendChild(div);

let counter = 1;
let width = 300;
let height = 300;

btn.addEventListener('click', function() {
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    div.style.backgroundColor = 'red';
    div.style.transition = 'all 0.5s ease';

    let interval = setInterval(function() {

        let p = document.createElement("p");
        let text = document.createTextNode("p" + counter);
        p.appendChild(text);
        body.appendChild(p);
        counter++;


        width -= 10;
        height -= 10;
        div.style.width = width + 'px';
        div.style.height = height + 'px';

        if (width <= 0 || height <= 0) {
            clearInterval(interval);
            div.style.display = "none";
        }
    }, 3000);
});


let pTags = document.querySelectorAll("p");
alert("Number of <p> tags: " + pTags.length);



let h2Tags = document.querySelectorAll("h2");
h2Tags.forEach(h2 => h2.style.color = "blue");



let liTags = document.querySelectorAll("li");
liTags.forEach(li => console.log(li.textContent));



let divs = document.querySelectorAll("div");
divs.forEach(div => div.style.backgroundColor = "lightgray");



let firstImg = document.querySelector("img");
if (firstImg) {
  firstImg.src = "https://placekitten.com/200/200";
}


let highlights = document.querySelectorAll(".highlight");
highlights.forEach(el => el.style.backgroundColor = "yellow");



let cards = document.querySelectorAll(".card");
console.log("Number of .card elements: " + cards.length);




let errors = document.querySelectorAll(".error");
errors.forEach(el => el.style.color = "red");




let items = document.querySelectorAll(".item");
items.forEach(el => console.log(el.innerHTML));



let button = document.querySelector(".button");
if (button) {
  button.textContent = "Clicked!";
}