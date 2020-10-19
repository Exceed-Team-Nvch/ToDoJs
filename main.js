const toDoInput = document.getElementById('todo-input');
const toDoItem = document.getElementById('todo-item');
const btnAll = document.getElementById('btn-all');
const btnActive = document.getElementById('btn-active');
const btnComp = document.getElementById('btn-completed');
const btnClear = document.getElementById('clear-btn');

let id = 0;
let TaskItemList = [];


btnComp.addEventListener('click',function(evt) {

    let toDoItems = document.querySelectorAll('.todo-item');

    toDoItems.forEach((item,index)=>{
        TaskItemList.forEach((it,ind) => {
            if (it.id == item.id && it.completed === false )  {
                item.style.display = 'none';
            }  else  if (it.id == item.id && it.completed === true ){
                item.style.display = 'block';
            }
        });
    });
});
btnClear.addEventListener('click',function(evt) {

        TaskItemList.forEach((item,index) => {
            if (item.completed == true) {            
               let delElem = document.getElementById(TaskItemList[index].id);
               delElem.parentNode.removeChild(delElem);
                delete TaskItemList[index];
            }
    
        })
    
});

btnAll.addEventListener('click',function(evt) {

    document.querySelectorAll('.todo-item').forEach((item,index) => {
        item.style.display = 'block';
    });

});

btnActive.addEventListener('click',function(evt) {

    let toDoItems = document.querySelectorAll('.todo-item');

    toDoItems.forEach((item,index)=>{
        TaskItemList.forEach((it,ind) => {
            if (it.id == item.id && it.completed === false )  {
                item.style.display = 'block';
            }  else  if (it.id == item.id && it.completed === true ){
                item.style.display = 'none';
            }
        });
    });

});

toDoInput.addEventListener('keydown', function(evt) {
    
    const val = toDoInput.value;

    if (evt.key === 'Enter') {

        let ToDoItem = document.createElement('div');
        ToDoItem.className = "todo-item";
        ToDoItem.innerHTML = ' <div class="circle" id="circle" ><span class="check-icon"></span></div><span class="todo-text">item-1</span><span class="cancel-icon"></span>';
        ToDoItem.setAttribute('id',id);
        const circle = ToDoItem.querySelector('.circle'); 
        const cancel = ToDoItem.querySelector('.cancel-icon');
        ToDoItem.querySelector('.todo-text').textContent = val;

        if (val === '') {
            alert('Input cannot be empty')
        } else {

        TaskItem = {
            taskItemText: val,
            id: id,
            completed: false
        }
        
        id++;
        TaskItemList.push(TaskItem);
        toDoInput.after(ToDoItem);

        circle.addEventListener('click',function(evt) {
           circle.firstChild.classList.toggle('visible');
           circle.nextElementSibling.classList.toggle('line');
           curId = circle.parentElement.id;

            if (circle.firstChild.classList.contains('visible')) {
                TaskItemList.forEach((item,index) => {
                    if (item.id == curId) {
                       item.completed = true;
                    } 
               });
            } else {
                TaskItemList.forEach((item,index) => {
                    if (index == curId) {
                       item.completed = false;
                    } 
               });
            }

        });

        cancel.addEventListener('click',function() {
           
           curId = cancel.parentElement.id;
           delElem = cancel.parentNode;

           delElem.parentNode.removeChild(delElem);
           TaskItemList.forEach((item,index) => {

                if (curId === item.id) {
                    TaskItemList.splice(curId,1);
                }

           });
        });
        }
    }
});

