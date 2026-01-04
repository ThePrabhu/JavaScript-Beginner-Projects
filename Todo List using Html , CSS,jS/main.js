let form = document.querySelector(".myForm");
let userInp = document.querySelector(".userInput");
let addBtn = document.querySelector(".add_task_btn");

function add_task() {
    if (userInp.value.trim() !== "") {
        // 1. Get existing tasks from localStorage (or start fresh)
        let todos = JSON.parse(localStorage.getItem("todos")) || [];

        // 2. Add the new task
        todos.push(userInp.value.trim());

        // 3. Save back to localStorage
        localStorage.setItem("todos", JSON.stringify(todos));

        alert("Your Task is added ✅");

        
        userInp.value = "";
    } else {
        alert("❌ Empty, add a valid input");
    }
}


addBtn.addEventListener("click", add_task);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    add_task();
});




















