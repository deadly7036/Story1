// Assuming you have an element with the id "tasks" in your HTML


let tasks = document.getElementById("tasks");

function addTask() {
  let taskInput = document.getElementById('input');
  if (taskInput.value === "") {
    alert("Please enter a task");
  } else {
    let taskList = {
      label: taskInput.value,
      checked: false
    };
    addTodoList(taskList);
    //saveItems();
  }
  taskInput.value = "";

}

function deleteTask(li) {
  let task = li.parentElement;
   console.log(li.parentElement)
   console.log(li.parentNode)
  task.removeChild(li);
  saveItems();
}

function toggleTask(taskLabel, checkBox) {
  taskLabel.style.textDecoration = checkBox.checked ? "line-through" : "none";
  saveItems();
}




function loadItems() {
  let savedItems = localStorage.getItem("tasks");
  if(savedItems) {
    let taskItems = JSON.parse(savedItems);
    taskItems.forEach(task => addTodoList(task) );
  }
}


function saveItems() {
  let taskItems = [];
  let taskElements = tasks.querySelectorAll("li");

  for (let i = 0; i < taskElements.length; i++) {
    let li = taskElements[i];
    let taskLabel = li.querySelector("label");
    let checkBox = li.querySelector("input[type='checkbox']");

    taskItems.push({
      label: taskLabel.innerHTML,
      checked: checkBox.checked
    });
  }

  localStorage.setItem("tasks", JSON.stringify(taskItems));
}
/*

function loadItems() {
  let savedItems = localStorage.getItem("tasks");

  if (savedItems) {
    let taskItems = JSON.parse(savedItems);
    taskItems.forEach((taskItem) => addTodoList(taskItem));
  }
} */


function addTodoList(taskList) {
  let li = document.createElement("li");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = taskList.checked;
  checkBox.onclick = function() {
    toggleTask(taskLabel, this);
    // console.log(taskLabel);
  };

  let taskLabel = document.createElement("label");
  taskLabel.innerHTML = taskList.label;
  taskLabel.style.textDecoration = taskList.checked ? "line-through" : "none";

  let span = document.createElement("span");
  span.innerHTML = "X";
  span.onclick = function() {
    deleteTask(li);
  };

  tasks.appendChild(li);
  li.appendChild(checkBox);
  li.appendChild(taskLabel);
  li.appendChild(span);
}



loadItems();










/*
let tasks = 

function addTask() {
  let taskInput = document.getElementById("input");

  if (taskInput.value === "") {
    alert("Please enter a task");
  } else {
    let taskItem = {
      label: taskInput.value,
      checked: false
    };

    appendTaskElement(taskItem);
    saveItems();
  }

  
}

function toggleTask(taskLabel, checkBox) {
  taskLabel.style.textDecoration = checkBox.checked ? "line-through" : "none";
  saveItems();
}

function deleteTask(li) {
  var tasksList = li.parentNode;
  tasksList.removeChild(li);
  saveItems();
}

function saveItems() {
  let taskItems = [];
  let taskElements = tasks.querySelectorAll("li");

  taskElements.forEach((li) => {
    let taskLabel = li.querySelector("label");
    let checkBox = li.querySelector("input[type='checkbox']");

    taskItems.push({
      label: taskLabel.innerHTML,
      checked: checkBox.checked
    });
  });

  localStorage.setItem("tasks", JSON.stringify(taskItems));
}

function loadItems() {
  let savedItems = localStorage.getItem("tasks");

  if (savedItems) {
    let taskItems = JSON.parse(savedItems);
    taskItems.forEach((taskItem) => appendTaskElement(taskItem));
  }
}

function appendTaskElement(taskItem) {
  let li = document.createElement("li");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = taskItem.checked;
  checkBox.onclick = function () {
    toggleTask(taskLabel, this);
  };

  let taskLabel = document.createElement("label");
  console.log(taskItem.label)
  taskLabel.innerHTML = taskItem.label;
  taskLabel.style.textDecoration = taskItem.checked ? "line-through" : "none";

  let span = document.createElement("span");
  span.innerHTML = "X";
  span.onclick = function () {
    deleteTask(li);
  };

  tasks.appendChild(li);
  li.appendChild(checkBox);
  li.appendChild(taskLabel);
  li.appendChild(span);
}

loadItems();






*/