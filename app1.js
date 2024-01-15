let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = {
            text: taskText,
            date: new Date(),
            completed: false,
        };

        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const date = task.date.toLocaleDateString();
        const taskText = `${date} - ${task.text}`;

        taskDiv.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(${index})">Remove</button>
        `;

        taskContainer.appendChild(taskDiv);
    });
}
