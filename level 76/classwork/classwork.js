const elements = document.querySelectorAll('.item');

elements.forEach((element, index) => {
  console.log(`ელემენტი {index + 1}:`, element.textContent);
});