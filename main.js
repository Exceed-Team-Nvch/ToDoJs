const toDoInput = document.getElementById("todo-input");
const btnAll = document.getElementById("btn-all");
const btnActive = document.getElementById("btn-active");
const btnComp = document.getElementById("btn-completed");
const btnClear = document.getElementById("clear-btn");

let id = 0;
let TaskItemList = [];

btnComp.addEventListener("click", function (evt) {
  let toDoItems = document.querySelectorAll(".todo-item");

  let CompArr = TaskItemList.map((item, index) => {
    if (item.completed) {
      return item.id;
    }
  });
  toDoItems.forEach((item, index) => {
    idNumb = parseInt(item.id, 10);

    CompArr.includes(idNumb)? item.style.display = "block" : item.style.display = "none";
  });
});

btnClear.addEventListener("click", function (evt) {
  TaskItemList.forEach((item, index) => {
    if (item.completed) {
      let delElem = document.getElementById(TaskItemList[index].id);
      delElem.parentNode.removeChild(delElem);
      delete TaskItemList[index];
    }
  });
});

btnAll.addEventListener("click", function (evt) {
  document.querySelectorAll(".todo-item").forEach((item, index) => {
    item.style.display = "block";
  });
});

btnActive.addEventListener("click", function (evt) {
  let toDoItems = document.querySelectorAll(".todo-item");

  let CompArr = TaskItemList.map((item, index) => {
    if (item.completed) {
      return item.id;
    }
  });
  toDoItems.forEach((item, index) => {
    idNumb = parseInt(item.id, 10);
    CompArr.includes(idNumb)? item.style.display = "none" : item.style.display = "block";
  });
});

toDoInput.addEventListener("keydown", function (evt) {
  const val = toDoInput.value;

  if (evt.key === "Enter") {
    let ToDoItem = document.createElement("div");
    ToDoItem.className = "todo-item";
    ToDoItem.innerHTML =
      '<div class="circle" id="circle" ><span class="check-icon"></span></div><span class="todo-text">item-1</span><span class="cancel-icon"></span>';
    ToDoItem.setAttribute("id", id);
    const circle = ToDoItem.querySelector(".circle");
    const cancel = ToDoItem.querySelector(".cancel-icon");
    ToDoItem.querySelector(".todo-text").textContent = val;

    if (val === "") {
      alert("Input cannot be empty");
    } else {
      TaskItem = {
        taskItemText: val,
        id: id,
        completed: false,
      };

      id++;
      TaskItemList.push(TaskItem);
      toDoInput.after(ToDoItem);

      circle.addEventListener("click", function (evt) {
        circle.firstChild.classList.toggle("visible");
        circle.nextElementSibling.classList.toggle("line");
        curId = parseInt(circle.parentElement.id,10);

        TaskItemList.forEach((item, index) => {
          if (item.id === curId) {
            item.completed = circle.firstChild.classList.contains("visible");
          }
        });
      });

      cancel.addEventListener("click", function () {
        curId = cancel.parentElement.id;
        delElem = cancel.parentNode;

        delElem.parentNode.removeChild(delElem);
        TaskItemList.forEach((item, index) => {
          if (curId === item.id) {
            TaskItemList.splice(curId, 1);
          }
        });
      });
    }
  }
});
