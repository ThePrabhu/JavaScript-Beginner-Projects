let buttons = document.querySelectorAll(".access__logo");
let contexts = document.querySelectorAll(".context");


buttons.forEach(button  => {
    button.addEventListener("click" , ()=> {
        buttons.forEach(btn => { btn.classList.remove("rotate")});
        contexts.forEach(context => {context.classList.add("hide")})

    button.classList.add("rotate")
    let tab = button.dataset.btn

    contexts.forEach(cont => {
        if(cont.dataset.btn === tab){
            cont.classList.add("show");
            cont.classList.remove("hide");
            }
        }
        )}
    )})





































