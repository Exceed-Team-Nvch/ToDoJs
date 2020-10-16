const ToDoInput = document.getElementById('todo-input');
const ToDoItem = document.getElementById('todo-item');
const btnAll = document.getElementById('btn-all');
const btnActive = document.getElementById('btn-active');
const btnComp = document.getElementById('btn-completed');
let arrItems = [];




btnComp.addEventListener('click',function(evt) {
    evt.preventDefault();

    let ListActive = document.querySelectorAll('.todo-item');
    ListActive.forEach(function(item, index) {
            if (!item.firstElementChild.firstElementChild.classList.contains('visible')) {
                    item.style.display = 'none';
            } else if (item.firstElementChild.firstElementChild.classList.contains('visible')) {
                    item.style.display = 'block';
            }
    });

})



btnAll.addEventListener('click',function(evt) {

    evt.preventDefault();

    arrItems.forEach(function(item,index) {
        
        item.style.display = 'block';

    });

});

btnActive.addEventListener('click',function(evt) {

    evt.preventDefault();

    let ListActive = document.querySelectorAll('.todo-item');
    ListActive.forEach(function(item, index) {
            if (item.firstElementChild.firstElementChild.classList.contains('visible')) {
                    item.style.display = 'none';
            } else if (!item.firstElementChild.firstElementChild.classList.contains('visible')) {
                    item.style.display = 'block';
            }
    });

});

ToDoInput.addEventListener('keydown', function(evt) {
    
    const val = ToDoInput.value;

    if (evt.key === 'Enter') {

        evt.preventDefault();

        const CloneItem = document.getElementById('todo-item').cloneNode(true);
        CloneItem.style.display = 'block';
        const cancel = CloneItem.querySelector('.cancel-icon');
        CloneItem.querySelector('.todo-text').textContent = val;
        const circle = CloneItem.querySelector('.circle'); 
        circle.nextElementSibling.classList.remove('line');
        circle.firstChild.classList.remove('visible');

        arrItems.push(CloneItem);

        ToDoInput.after(CloneItem);

          ///  ToDoInput.insertAdjacentHTML('afterend', CloneItem);

          

        circle.addEventListener('click',function() {

           circle.firstChild.classList.toggle('visible');
           circle.nextElementSibling.classList.toggle('line');

        });
        cancel.addEventListener('click',function() {
           CloneItem.style.display = 'none';
           arrItems.forEach(function(item,index) {
             if (CloneItem.querySelector('.todo-text').textContent === item.querySelector('.todo-text').textContent) {
                arrItems.splice(index,1);
             }
           });
        });

         

    }


});

