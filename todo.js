// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create new task item
  const li = document.createElement('li');

  // Task text
  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  li.appendChild(completeBtn);

  // Rename input
  const renameInput = document.createElement('input');
  renameInput.type = 'text';
  renameInput.style.display = 'none';
  li.appendChild(renameInput);

  // Rename button
  const renameBtn = document.createElement('button');
  renameBtn.textContent = '✎';
  renameBtn.addEventListener('click', () => {
    renameInput.style.display = 'inline';
    renameInput.value = span.textContent;
    span.style.display = 'none';
    renameInput.focus();
  });
  li.appendChild(renameBtn);

  // Save rename
  renameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      span.textContent = renameInput.value;
      renameInput.style.display = 'none';
      span.style.display = 'inline';
    }
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });
  li.appendChild(deleteBtn);

  // Add task to list
  taskList.appendChild(li);
  taskInput.value = '';
}

// Event listener for add task button
addTaskBtn.addEventListener('click', addTask);

// Event listener for Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});