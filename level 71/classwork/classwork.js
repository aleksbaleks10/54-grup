// ---
window.onload = function() {

  const div = document.createElement("div");
  div.id = "myDiv";

  const paragraph = document.createElement("p");
  paragraph.textContent = "ეს არის მხოლოდ JavaScript-ით შექმნილი ტექსტი.";

  div.appendChild(paragraph);

  document.body.appendChild(div);
};


// ---
let button = document.createElement("button");
button.textContent = "წაშალე შვილობილი დივი";
button.onclick = removeChildElement;
document.body.appendChild(button);

let parentDiv = document.createElement("div");
parentDiv.id = "parentDiv";
parentDiv.style.marginTop = "20px";
parentDiv.style.padding = "10px";
parentDiv.style.border = "1px solid black";

let childDiv = document.createElement("div");
childDiv.id = "childDiv";
childDiv.style.padding = "10px";
childDiv.style.backgroundColor = "#eee";
childDiv.textContent = "შვილობილი დივი";

parentDiv.appendChild(childDiv);
document.body.appendChild(parentDiv);

function removeChildElement() {
  let parent = document.getElementById("parentDiv");
  let child = document.getElementById("childDiv");
  if (parent && child) {
    parent.removeChild(child);
  }
}
// ---
window.onload = function(){
   let parentDiv = document.getElementById("parent");
   let oldParagraph = parentDiv.querySelector("p");
   let newParagraph = document.createElement("p");
  newParagraph.textContent = "ეს არის ახალი პარაგრაფი, რომელიც შეცვლის ძველს.";
  parentDiv.replaceChild(newParagraph, oldParagraph);
};