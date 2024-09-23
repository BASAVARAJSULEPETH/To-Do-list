document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');
    const addTaskBtn = document.getElementById('add-task-btn');

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText === '') {
            alert('You must write something!');
            return;
        }

        
        const li = document.createElement('li');

        
        const textNode = document.createTextNode(taskText);
        li.appendChild(textNode);

        
        const span = document.createElement('span');
        span.textContent = '\u00d7'; 
        span.className = 'delete';
        span.addEventListener('click', () => {
            li.remove(); 
        });
        li.appendChild(span);

        
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        
        listContainer.appendChild(li);

        
        inputBox.value = '';
    }

    
    addTaskBtn.addEventListener('click', addTask);

    
    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
