let tasksList = document.querySelector(".tasks_list");


let todos = JSON.parse(localStorage.getItem("todos")) || [];

tasksList.innerHTML = "";
todos.forEach(tsk => {
    let li = document.createElement("li");
    li.textContent = tsk;
    li.classList.add('task-style');
    tasksList.appendChild(li);
});






























