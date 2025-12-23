let button = document.querySelector(".ct-btn");
let model = document.querySelector(".model");
let close_btn = document.querySelector(".close_btn");
let Mycontainer = document.querySelector(".my__container");


button.addEventListener("click" , ()=> {
    model.classList.add("show");
    model.classList.add("model_animation");
    

})

close_btn.addEventListener("click" , ()=> {
    model.classList.add("hide");
    model.classList.remove("show");
    
})