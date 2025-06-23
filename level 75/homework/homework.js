// 1. Select all <p> tags and alert the total count
const paragraphs = document.querySelectorAll('p');
alert(`Total <p> elements: ${paragraphs.length}`);

// 2. Change text color of all <h2> elements to blue
document.querySelectorAll('h2').forEach(h2 => {
  h2.style.color = 'blue';
});

// 3. Log the text content of each <li> element
document.querySelectorAll('li').forEach(li => {
  console.log(li.textContent);
});

// 4. Set background color of all <div> elements to lightgray
document.querySelectorAll('div').forEach(div => {
  div.style.backgroundColor = 'lightgray';
});

// 5. Change the src of the first <img> element
const firstImage = document.querySelector('img');
if (firstImage) {
  firstImage.src = 'https://example.com/new-image.jpg';
}

// 7. ყველა highlight კლასი — ფონის ფერის შეცვლა yellow-ზე
var highlights = document.getElementsByClassName('highlight');
for (var i = 0; i < highlights.length; i++) {
  highlights[i].style.backgroundColor = 'yellow';
}

// 8. დავთვალოთ რამდენი ელემენტია კლასი card-ით და დავბეჭდოთ
var cards = document.getElementsByClassName('card');
console.log("Total elements with class 'card': " + cards.length);

// 9. ყველა error კლასი — ტექსტის ფერის შეცვლა წითელზე
var errors = document.getElementsByClassName('error');
for (var i = 0; i < errors.length; i++) {
  errors[i].style.color = 'red';
}

// 10. ყველა item კლასი — შევიტანოთ მათი innerHTML კონსოლში
var items = document.getElementsByClassName('item');
for (var i = 0; i < items.length; i++) {
  console.log(items[i].innerHTML);
}

// 11. ვიპოვოთ პირველი ელემენტი კლასი button-ით და შევცვალოთ ტექსტი
var buttons = document.getElementsByClassName('button');
if (buttons.length > 0) {
  buttons[0].textContent = 'Clicked!';
}

var box = document.getElementById('slider');
var position = 0;

setInterval(function () {
  position += 5;
  box.style.left = position + 'px';
}, 100);