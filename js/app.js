let tasks = [];

function formatDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function addTask(title) {
  if (!title.trim()) return;

  const newTask = {
    id: Date.now(),
    title: title.trim(),
    completed: false,
    createdAt: formatDate()
  };

  tasks.push(newTask);
  Storage.saveTasks(tasks);
  renderTasks();
}

function getTasks() {
  return tasks;
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    Storage.saveTasks(tasks);
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  Storage.saveTasks(tasks);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
      <span class="task-title">${task.title}</span>
      <span class="task-date">${task.createdAt}</span>
      <button class="delete-btn" onclick="deleteTask(${task.id})">Xóa</button>
    `;

    taskList.appendChild(li);
  });

  updateStats();
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  document.getElementById('total-tasks').textContent = total;
  document.getElementById('completed-tasks').textContent = completed;
  document.getElementById('pending-tasks').textContent = pending;
}

document.addEventListener('DOMContentLoaded', () => {
  tasks = Storage.loadTasks();
  renderTasks();

  const form = document.getElementById('task-form');
  const input = document.getElementById('task-input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(input.value);
    input.value = '';
  });
});
