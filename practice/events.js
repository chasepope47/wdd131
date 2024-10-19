let tasks = [];

function renderTasks(tasks) {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // Clear the list before rendering
  tasks.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.className = task.completed ? 'strike' : '';

    taskElement.innerHTML = `
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    `;
    
    // Append the new task to the list
    todoList.appendChild(taskElement);
  });
}

function newTask() {
  const input = document.getElementById('todo').value;
  if (input !== '') {
    tasks.push({ detail: input, completed: false });
    document.getElementById('todo').value = ''; // Clear the input after adding
    renderTasks(tasks);
  }
}

function removeTask(taskElement) {
  const taskDetail = taskElement.querySelector('p').innerText;
  tasks = tasks.filter(task => task.detail !== taskDetail);
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskDetail = taskElement.querySelector('p').innerText;
  const taskIndex = tasks.findIndex(task => task.detail === taskDetail);
  tasks[taskIndex].completed = !tasks[taskIndex].completed; // Toggle completion
  taskElement.classList.toggle('strike');
}

function manageTasks(event) {
  const taskElement = event.target.closest('li');
  if (event.target.dataset.function === 'delete') {
    removeTask(taskElement);
  } else if (event.target.dataset.function === 'complete') {
    completeTask(taskElement);
  }
}

// Event listeners
document.getElementById('submitTask').addEventListener('click', newTask);
document.getElementById('todoList').addEventListener('click', manageTasks);
