// app.js
document.getElementById('addTask').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const priority = document.getElementById('priority').value;

    if (taskInput === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new task element
    const li = document.createElement('li');
    li.classList.add(priority); // Add the priority class (low, medium, high)

    const taskText = document.createElement('span');
    taskText.textContent = taskInput;

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => {
        taskText.classList.toggle('complete');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);

    // Clear input
    document.getElementById('taskInput').value = '';
}
