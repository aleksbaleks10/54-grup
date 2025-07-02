const images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
    images[i].src = "https://example.com/new-image.jpg";
    break;
}


document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.style.left = '400px';
    }, index * 200);
  });
});

    // დივის სტილის დამატება JavaScript-ით
    const div = document.getElementById("myDiv");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "lightblue";
    div.style.position = "relative";
    div.style.left = "0px";
    div.style.marginTop = "20px";
    div.style.transition = "background-color 1s";

    let moveCount = 0;

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    const button = document.getElementById("moveBtn");
    button.addEventListener("click", () => {
      moveCount++;

      // გადაადგილება მარჯვნივ
      div.style.left = (moveCount * 10) + "px";

      // ფერის ცვლილება შემთხვევითად
      const originalColor = div.style.backgroundColor;
      const newColor = getRandomColor();
      div.style.backgroundColor = newColor;

      // 10 წამში დაბრუნდეს ძველ ფერზე
      setTimeout(() => {
        div.style.backgroundColor = originalColor;
      }, 10000);
    });


    // შექმენი დივი
const div = document.createElement('div');
div.style.width = '300px';
div.style.height = '300px';
div.style.backgroundColor = 'teal';
div.style.margin = '20px auto';
div.style.transition = 'all 0.5s ease';
div.id = 'myDiv';
document.body.appendChild(div);

// შექმენი ღილაკი
const button1 = document.createElement('button');
button.textContent = 'დაწყება';
button.id = 'myButton';
button.style.display = 'block';
button.style.margin = '10px auto';
document.body.appendChild(button);

// კონტეინერი p ელემენტებისთვის
const pContainer = document.createElement('div');
document.body.appendChild(pContainer);

let counter = 1;
let width = 300;
let height = 300;

button.addEventListener('click', () => {
  button.disabled = true; // თავიდან აცილება მრავალდროული გაშვებისგან

  const interval = setInterval(() => {
    // შეცვალე ფერი შემთხვევით
    div.style.backgroundColor = `rgb(${rand255()}, ${rand255()}, ${rand255()})`;

    // დაამატე ახალი <p> ელემენტი
    const p = document.createElement('p');
    const text = document.createTextNode(`p${counter}`);
    p.appendChild(text);
    pContainer.appendChild(p);
    counter++;

    // ზომების შემცირება
    width -= 30;
    height -= 30;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;

    // გაჩერება და დივის გაქრობა
    if (width <= 0 || height <= 0) {
      clearInterval(interval);
      div.style.display = 'none';
    }

  }, 3000);
});

// შემთხვევითი ფერისთვის
function rand255() {
  return Math.floor(Math.random() * 256);
}