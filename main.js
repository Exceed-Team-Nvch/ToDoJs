const toDoInput = document.getElementById('todo-input');
const btnAll = document.getElementById('btn-all');
const btnActive = document.getElementById('btn-active');
const btnComp = document.getElementById('btn-completed');
const btnClear = document.getElementById('clear-btn');

let id = 0;
let taskItemList = [];

function comparing(arr, item, id, stateFirst, stateSecond) {
  arr.includes(id)? (item.style.display = stateFirst) : (item.style.display = stateSecond);
}

btnComp.addEventListener('click', function (evt) {
  let toDoItems = document.querySelectorAll('.todo-item');

  let compArr = taskItemList.map((item) => {
    if (item.completed) {
      return item.id;
    }
  });
  toDoItems.forEach((item) => {
    idNumb = parseInt(item.id, 10);
    comparing(compArr, item, idNumb, "block", "none");
  });
});

btnClear.addEventListener('click', function (evt) {
  let toDoItems = document.querySelectorAll('.todo-item');
  let compArr = taskItemList.map((item) => {
    if (item.completed) {
      return item.id;
    }
  });
  toDoItems.forEach((item) => {
    idNumb = parseInt(item.id, 10);
    if (compArr.includes(idNumb)) {
      let delElem = document.getElementById(item.id);
      delElem.parentNode.removeChild(delElem);
    }
  });
  taskItemList = taskItemList.filter((item) => !compArr.includes(item.id));
});

btnAll.addEventListener('click', (evt) => {
  document.querySelectorAll('.todo-item').forEach((item) => {
    item.style.display = 'block';
  });
});

btnActive.addEventListener('click', (evt) => {
  let toDoItems = document.querySelectorAll(".todo-item");

  let compArr = taskItemList.map((item) => {
    if (item.completed) {
      return item.id;
    }
  });
  toDoItems.forEach((item) => {
    idNumb = parseInt(item.id, 10);
    comparing(compArr, item, idNumb, "none", "block");
  });
});

toDoInput.addEventListener("keydown", function (evt) {
  const val = toDoInput.value;

  if (evt.key === 'Enter') {
    let toDoItem = document.createElement("div");
    toDoItem.className = "todo-item";
    toDoItem.innerHTML =
      "<div class='circle' id='circle' ><span class='check-icon'></span></div><span class='todo-text'>item-1</span><span class='cancel-icon'></span>";
    toDoItem.setAttribute("id", id);
    const circle = toDoItem.querySelector(".circle");
    const cancel = toDoItem.querySelector(".cancel-icon");
    toDoItem.querySelector(".todo-text").textContent = val;

    if (!val) {
      alert('Input cannot be empty');
    } else {
      taskItem = {
        taskItemText: val,
        id: id,
        completed: false,
      };
      toDoInput.value = "";
      id++;
      taskItemList.push(taskItem);
      toDoInput.after(toDoItem);
      circle.addEventListener('click', function (evt) {
        circle.firstChild.classList.toggle('visible');
        circle.nextElementSibling.classList.toggle('line');
        curId = parseInt(circle.parentElement.id, 10);

        taskItemList.forEach((item, index) => {
          if (item.id === curId) {
            item.completed = circle.firstChild.classList.contains('visible');
          }
        });
      });
      cancel.addEventListener('click', function () {
        curId = parseInt(cancel.parentElement.id, 10);
        delElem = cancel.parentNode;
        delElem.parentNode.removeChild(delElem);
        taskItemList = taskItemList.filter((item) => item.id !== curId);
      });
    }
  }
});
