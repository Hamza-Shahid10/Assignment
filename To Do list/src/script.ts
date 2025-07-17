// Initialize AOS
declare const AOS: any;
AOS.init();

// Type Definitions
interface Task {
  task: string;
  status: boolean;
}

// DOM Elements with Non-null Assertion (or fallback check)
const getInp = document.getElementById("inp") as HTMLInputElement;
const getUl = document.getElementById("list") as HTMLUListElement;
const delAllButton = document.querySelector("button[onclick='delall(this)']") as HTMLButtonElement;

// ========== Add New Task ==========
function send(): void {
  const newTask: string = getInp.value.trim();

  if (!newTask) {
    alert("Please enter a task");
    return;
  }

  const taskList: Task[] = JSON.parse(localStorage.getItem("task") || "[]");

  if (taskList.some(t => t.task === newTask)) {
    alert("Task already exists");
    getInp.value = "";
    return;
  }

  taskList.push({ task: newTask, status: false });
  localStorage.setItem("task", JSON.stringify(taskList));

  addTaskToList(newTask);
  getInp.value = "";

  delAllButton.disabled = false;
  delAllButton.style.backgroundColor = "rgb(14, 13, 13)";
}

// ========== Render a Task ==========
function addTaskToList(taskText: string, status: boolean = false): void {
  const li = document.createElement("li");
  li.className = "pira";

  li.innerHTML = `
    <div class="task-text">${taskText}</div>
    <div class="task-actions">
      <label class="custom-checkbox">
        <input type="checkbox" onchange="toggleComplete(this)" ${status ? "checked" : ""}>
        <span class="checkmark"></span>
      </label>
      <button onclick="delet(this)"><i class="fa-solid fa-trash-can"></i></button>
      <button onclick="edit(this)">Edit</button>
    </div>
  `;

  if (status) {
    li.querySelector(".task-text")?.classList.add("completed");
  }

  getUl.appendChild(li);
}

// ========== Toggle Task Completion ==========
function toggleComplete(checkbox: HTMLInputElement): void {
  const li = checkbox.closest("li") as HTMLLIElement;
  const taskText = li.querySelector(".task-text") as HTMLDivElement;
  const taskName = taskText.textContent?.trim();

  if (!taskName) return;

  taskText.classList.toggle("completed", checkbox.checked);

  const taskList: Task[] = JSON.parse(localStorage.getItem("task") || "[]");
  const updatedList = taskList.map(item =>
    item.task === taskName ? { ...item, status: checkbox.checked } : item
  );

  localStorage.setItem("task", JSON.stringify(updatedList));
}

// ========== Delete a Task ==========
function delet(button: HTMLButtonElement): void {
  const li = button.closest("li") as HTMLLIElement;
  const taskText = (li.querySelector(".task-text") as HTMLElement).textContent?.trim();

  if (!taskText) return;

  li.remove();

  let taskList: Task[] = JSON.parse(localStorage.getItem("task") || "[]");
  taskList = taskList.filter(item => item.task !== taskText);

  if (taskList.length === 0) {
    delAllButton.disabled = true;
    delAllButton.style.backgroundColor = "rgb(180, 180, 180)";
  }

  localStorage.setItem("task", JSON.stringify(taskList));
}

// ========== Edit a Task ==========
function edit(button: HTMLButtonElement): void {
  const li = button.closest("li") as HTMLLIElement;
  const taskDiv = li.querySelector(".task-text") as HTMLElement;
  const oldTask = taskDiv.textContent?.trim();

  if (!oldTask) return;

  const updatedValue = prompt("Update Task", oldTask);
  if (!updatedValue || updatedValue.trim() === "") {
    alert("Task cannot be empty");
    return;
  }

  const trimmedValue = updatedValue.trim();
  let taskList: Task[] = JSON.parse(localStorage.getItem("task") || "[]");

  if (taskList.some(item => item.task === trimmedValue)) {
    alert("Task already exists");
    return;
  }

  taskList = taskList.filter(item => item.task !== oldTask);
  taskList.push({ task: trimmedValue, status: false });

  localStorage.setItem("task", JSON.stringify(taskList));
  taskDiv.textContent = trimmedValue;
}

// ========== Delete All ==========
function delall(button: HTMLButtonElement): void {
  getUl.innerHTML = "";
  localStorage.removeItem("task");
  button.disabled = true;
  button.style.backgroundColor = "rgb(180, 180, 180)";
}

// ========== Load Tasks on Start ==========
function loadTasks(): void {
  const taskList: Task[] = JSON.parse(localStorage.getItem("task") || "[]");

  taskList.forEach(item => {
    addTaskToList(item.task, item.status);
  });

  if (taskList.length === 0) {
    delAllButton.disabled = true;
    delAllButton.style.backgroundColor = "rgb(180, 180, 180)";
  }
}

// ========== Search Function ==========
function search(): void {
  const input = (document.getElementById("search") as HTMLInputElement).value.toLowerCase();
  const items = document.querySelectorAll<HTMLLIElement>("#list li");

  items.forEach(item => {
    const text = item.textContent?.toLowerCase() || "";
    item.style.display = text.includes(input) ? "flex" : "none";
  });

  if (input === "") {
    items.forEach(item => item.style.display = "flex");
  }
}

// ========== Keydown Listener ==========
getInp.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") send();
});

// ========== Init ==========
window.onload = loadTasks;
