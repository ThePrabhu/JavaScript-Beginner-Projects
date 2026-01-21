// variables
const off = document.querySelector(".fa-toggle-off");
const on = document.querySelector(".fa-toggle-on");
const main = document.querySelector(".main_page");



// function to perform the action
function state(){
    off.classList.toggle("hideClass");
    on.classList.toggle("hideClass");
    main.classList.toggle("themeChange");
}

// Event Listenrs for toggles
off.addEventListener("click" , state)
on.addEventListener("click" , state)