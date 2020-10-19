const ToDoInput = document.getElementById('todo-input');
const ToDoItem = document.getElementById('todo-item');
const btnAll = document.getElementById('btn-all');
const btnActive = document.getElementById('btn-active');
const btnComp = document.getElementById('btn-completed');
const btnClear = document.getElementById('clear-btn');
let arrItems = [];


btnComp.addEventListener('click',function(evt) {

    arrItems.forEach(function(item, index) {

      const checkIcon =  item.querySelector('.check-icon');

            if (!checkIcon.classList.contains('visible')) {
                    item.style.display = 'none';
            } else if (checkIcon.classList.contains('visible')) {
                    item.style.display = 'block';
            }
    });

});
btnClear.addEventListener('click',function(evt) {

    while (arrItems.some((item) => item.querySelector('.check-icon').classList.contains('visible') )) {

        arrItems.forEach(function(item,index) {

            const checkIcon = item.querySelector('.check-icon');

             if (checkIcon.classList.contains('visible')) {
                item.style.display = 'none';
                arrItems.splice(index,1);
             }
    
        })
    }
});


btnAll.addEventListener('click',function(evt) {

    arrItems.forEach(function(item,index) {
        
        item.style.display = 'block';

    });

});

btnActive.addEventListener('click',function(evt) {

    arrItems.forEach(function(item, index) {

        const checkIcon =  item.querySelector('.check-icon');

            if (checkIcon.classList.contains('visible')) {
                    item.style.display = 'none';
            } else if (!checkIcon.classList.contains('visible')) {
                    item.style.display = 'block';
            }
    });

});

ToDoInput.addEventListener('keydown', function(evt) {
    
    const val = ToDoInput.value;

    if (evt.key === 'Enter') {

        const CloneItem = document.getElementById('todo-item').cloneNode(true);
        const circle = CloneItem.querySelector('.circle'); 
        const cancel = CloneItem.querySelector('.cancel-icon');

        CloneItem.style.display = 'block';
        CloneItem.querySelector('.todo-text').textContent = val;
        circle.nextElementSibling.classList.remove('line');
        circle.firstChild.classList.remove('visible');

        const ExistingTask = arrItems.some((item)  =>  val === item.querySelector('.todo-text').textContent) ;

        if (ExistingTask) {

            alert('this task already exist');
            ToDoInput.style.boxShadow = ' 0 0 10px red';

        } else if (val !== '') {

        ToDoInput.style.boxShadow = 'none';

        arrItems.push(CloneItem);

        ToDoInput.after(CloneItem);

        circle.addEventListener('click',function() {
           circle.firstChild.classList.toggle('visible');
           circle.nextElementSibling.classList.toggle('line');
        });

        cancel.addEventListener('click',function() {
           
            const ToDoText = CloneItem.querySelector('.todo-text').textContent;
            CloneItem.style.display = 'none';

           arrItems.forEach((item,index) => { if ( ToDoText === item.querySelector('.todo-text').textContent) {arrItems.splice(index,1);}}
           );
        });
        }
    }
});

