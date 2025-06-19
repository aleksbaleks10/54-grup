document.getElementById('alertBtn').addEventListener('click', function () {
  alert('ღილაკზე დააჭირე!');
});

document.getElementById('hoverText').addEventListener('mouseover', function () {
  this.textContent = 'ტექსტი შეიცვალა!';
});


const toggleDiv = document.getElementById('toggleDiv');
let isBlue = true;
toggleDiv.addEventListener('click', function () {
  toggleDiv.style.backgroundColor = isBlue ? 'lightgreen' : 'lightblue';
  isBlue = !isBlue;
});

document.getElementById('logInput').addEventListener('click', function () {
  console.log(this.value);
});

const img = document.getElementById('myImage');
document.getElementById('toggleImageBtn').addEventListener('click', function () {
  img.style.display = (img.style.display === 'none') ? 'block' : 'none';
});

