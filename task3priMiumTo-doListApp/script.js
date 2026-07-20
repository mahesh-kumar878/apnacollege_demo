alert("new js loaded");

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const completedBtn = document.getElementById("completedBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCount() {
    taskCount.textContent = tasks.length;
}

function displayTasks(filter = currentFilter) {

    currentFilter = filter;

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (filter === "active") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    if (filter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    if (filteredTasks.length === 0) {
        taskList.innerHTML = "<p style='text-align:center;'>No Tasks Found</p>";
        updateCount();
        saveTasks();
        return;
    }

    filteredTasks.forEach(task => {

        const index = tasks.indexOf(task);

        const div = document.createElement("div");
        div.className = "task-item";

        if (task.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            <span>${task.text}</span>

            <div class="task-buttons">
                <button onclick="completeTask(${index})">Complete</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(div);
    });

    updateCount();
    saveTasks();
}

addTask.addEventListener("click", () => {

    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";

    displayTasks();
});

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function editTask(index) {

    const newTask = prompt("Edit Task", tasks[index].text);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index].text = newTask.trim();
        displayTasks();
    }
}

function deleteTask(index) {

    if (confirm("Delete this task?")) {
        tasks.splice(index, 1);
        displayTasks();
    }
}

allBtn.addEventListener("click", () => displayTasks("all"));
activeBtn.addEventListener("click", () => displayTasks("active"));
completedBtn.addEventListener("click", () => displayTasks("completed"));

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask.click();
    }
});

displayTasks();