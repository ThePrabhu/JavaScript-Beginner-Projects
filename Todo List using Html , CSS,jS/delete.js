let deleteInp = document.querySelector("#deleteNum");
let delBtn  = document.querySelector(".del_btn");

function delete_task() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let index = parseInt(deleteInp.value) - 1; // -1 because arrays start at 0


    if (index >= 0 && index < todos.length) {

        let removed = todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));

        alert(`Task "${removed}" deleted 🗑️`);
        deleteInp.value = "";
    } else {
        alert("❌ Invalid task number");
    }
}

delBtn.addEventListener("click" , delete_task)
