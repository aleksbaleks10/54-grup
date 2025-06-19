const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

const tasks = [];

addBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li);
    const index = tasks.indexOf(taskText);
    if (index !== -1) tasks.splice(index, 1);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  tasks.push(taskText);

  taskInput.value = '';
});

document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("textParagraph").textContent = "ტექსტი შეიცვალა!";
});


setInterval(() => {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  document.body.style.backgroundColor = color;
}, 2000);


document.getElementById("addNameBtn").addEventListener("click", () => {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();
  if (name) {
    const li = document.createElement("li");
    li.textContent = name;
    document.getElementById("nameList").appendChild(li);
    input.value = "";
  }
});


function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('ka-GE');
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

