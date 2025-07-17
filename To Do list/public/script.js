"use strict";
AOS.init();
// DOM Elements with Non-null Assertion (or fallback check)
const getInp = document.getElementById("inp");
const getUl = document.getElementById("list");
const delAllButton = document.querySelector("button[onclick='delall(this)']");
// ========== Add New Task ==========
function send() {
    const newTask = getInp.value.trim();
    if (!newTask) {
        alert("Please enter a task");
        return;
    }
    const taskList = JSON.parse(localStorage.getItem("task") || "[]");
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
function addTaskToList(taskText, status = false) {
    var _a;
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
        (_a = li.querySelector(".task-text")) === null || _a === void 0 ? void 0 : _a.classList.add("completed");
    }
    getUl.appendChild(li);
}
// ========== Toggle Task Completion ==========
function toggleComplete(checkbox) {
    var _a;
    const li = checkbox.closest("li");
    const taskText = li.querySelector(".task-text");
    const taskName = (_a = taskText.textContent) === null || _a === void 0 ? void 0 : _a.trim();
    if (!taskName)
        return;
    taskText.classList.toggle("completed", checkbox.checked);
    const taskList = JSON.parse(localStorage.getItem("task") || "[]");
    const updatedList = taskList.map(item => item.task === taskName ? Object.assign(Object.assign({}, item), { status: checkbox.checked }) : item);
    localStorage.setItem("task", JSON.stringify(updatedList));
}
// ========== Delete a Task ==========
function delet(button) {
    var _a;
    const li = button.closest("li");
    const taskText = (_a = li.querySelector(".task-text").textContent) === null || _a === void 0 ? void 0 : _a.trim();
    if (!taskText)
        return;
    li.remove();
    let taskList = JSON.parse(localStorage.getItem("task") || "[]");
    taskList = taskList.filter(item => item.task !== taskText);
    if (taskList.length === 0) {
        delAllButton.disabled = true;
        delAllButton.style.backgroundColor = "rgb(180, 180, 180)";
    }
    localStorage.setItem("task", JSON.stringify(taskList));
}
// ========== Edit a Task ==========
function edit(button) {
    var _a;
    const li = button.closest("li");
    const taskDiv = li.querySelector(".task-text");
    const oldTask = (_a = taskDiv.textContent) === null || _a === void 0 ? void 0 : _a.trim();
    if (!oldTask)
        return;
    const updatedValue = prompt("Update Task", oldTask);
    if (!updatedValue || updatedValue.trim() === "") {
        alert("Task cannot be empty");
        return;
    }
    const trimmedValue = updatedValue.trim();
    let taskList = JSON.parse(localStorage.getItem("task") || "[]");
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
function delall(button) {
    getUl.innerHTML = "";
    localStorage.removeItem("task");
    button.disabled = true;
    button.style.backgroundColor = "rgb(180, 180, 180)";
}
// ========== Load Tasks on Start ==========
function loadTasks() {
    const taskList = JSON.parse(localStorage.getItem("task") || "[]");
    taskList.forEach(item => {
        addTaskToList(item.task, item.status);
    });
    if (taskList.length === 0) {
        delAllButton.disabled = true;
        delAllButton.style.backgroundColor = "rgb(180, 180, 180)";
    }
}
// ========== Search Function ==========
function search() {
    const input = document.getElementById("search").value.toLowerCase();
    const items = document.querySelectorAll("#list li");
    items.forEach(item => {
        var _a;
        const text = ((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || "";
        item.style.display = text.includes(input) ? "flex" : "none";
    });
    if (input === "") {
        items.forEach(item => item.style.display = "flex");
    }
}
// ========== Keydown Listener ==========
getInp.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        send();
});
// ========== Init ==========
window.onload = loadTasks;
