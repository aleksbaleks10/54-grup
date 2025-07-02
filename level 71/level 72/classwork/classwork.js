const paragraph = document.getElementById('myParagraph');

paragraph.addEventListener('click', function() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  document.body.style.textAlign = 'center';
});


const button = document.getElementById('myButton');

button.addEventListener('click', function(e) {
  console.log(e);
  e.target.style.backgroundColor = 'black';
});