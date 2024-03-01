"use strict";
function addTask() {
    var _a;
    const input = document.getElementById("taskInput");
    const inputvalue = input.value;
    // i used trim() to trim the input value
    if (inputvalue.trim() !== '') {
        const li = document.createElement("li");
        li.textContent = inputvalue;
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            const newTask = prompt("Edit task:");
            if (newTask !== null) {
                li.textContent = newTask.trim();
            }
        };
        // create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            li.remove();
        };
        // append button to the lidt item
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        (_a = document.getElementById("taskList")) === null || _a === void 0 ? void 0 : _a.appendChild(li);
        input.value = '';
    }
}
// const Task = document.getElementById("taskInput") as HTMLInputElement
// let li = document.getElementById("taskList") as HTMLElement
// const btn=document.getElementById("btn") as   HTMLButtonElement;
// function addTask() {
//     li.innerHTML = Task.value
//     const todo = Task.value;
//     if (todo.trim()!==''){
//         const li = document.createElement("li");
//         li.textContent = todo;
//         document.getElementById("task list")?.appendChild(li);
//         Task.value ='';  
//     }
// }
// addTask()
