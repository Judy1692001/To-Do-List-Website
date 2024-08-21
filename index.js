const button = document.getElementById('newTaskButton');

const taskBox = document.getElementById('taskBox');

button.addEventListener('click', () => {

    const newTask = document.createElement('div');

    newTask.className = 'task';

    const checkIcon = document.createElement('i');

    checkIcon.className = 'fa-solid fa-check';

    checkIcon.style.pointerEvents = 'none';
    
    checkIcon.style.opacity = '0.5';

    const taskInput = document.createElement('input');

    taskInput.type = 'text';

    taskInput.name = 'taskName';

    taskInput.placeholder = 'Enter your task here...';

    taskInput.className = 'text-input';

    taskInput.addEventListener('input', () => {
        
        if(taskInput.value === '') {

            checkIcon.style.pointerEvents = 'none';

            checkIcon.style.opacity = '0.5';

        }

        else {

            checkIcon.style.pointerEvents = 'auto';

            checkIcon.style.opacity = '1';

        }
    })

    checkIcon.addEventListener('click', () => {

        taskInput.classList.toggle('checked-task');

        checkIcon.classList.toggle('green-check');

    })

    const deleteIcon = document.createElement('i');

    deleteIcon.className = 'fa-solid fa-trash';

    deleteIcon.addEventListener('click', () => {

        taskBox.removeChild(newTask);

    })

    newTask.appendChild(taskInput);

    newTask.appendChild(checkIcon);

    newTask.appendChild(deleteIcon);

    taskBox.appendChild(newTask);

    newTask.scrollIntoView({ behavior: 'smooth' });

})