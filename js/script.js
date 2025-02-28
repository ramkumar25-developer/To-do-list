const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  li.appendChild(completeBtn);

  const renameInput = document.createElement('input');
  renameInput.type = 'text';
  renameInput.style.display = 'none';
  li.appendChild(renameInput);

  const renameBtn = document.createElement('button');
  renameBtn.textContent = '✎';
  renameBtn.addEventListener('click', () => {
    renameInput.style.display = 'inline';
    renameInput.value = span.textContent;
    span.style.display = 'none';
    renameInput.focus();
  });
  li.appendChild(renameBtn);

  renameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      span.textContent = renameInput.value;
      renameInput.style.display = 'none';
      span.style.display = 'inline';
    }
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});