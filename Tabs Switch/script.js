let btn1 = document.querySelector(".demonSlayerTabBtn");
let btn2 = document.querySelector(".BlackClovBtn");
let btn3 = document.querySelector(".myHeroAcademiaBtn");

let tab1 = document.querySelector(".demonSlayerTab");
let tab2 = document.querySelector(".BlackCloverTab");
let tab3 = document.querySelector(".myHeroAcademiaTab");

btn1.addEventListener("click" , ()=>{
    btn1.classList.add("stylingTab")
    btn2.classList.remove("stylingTab");
    btn3.classList.remove("stylingTab")
    
    tab1.classList.remove("d-none");
    tab2.classList.add("d-none");
    tab3.classList.add("d-none")
})

btn2.addEventListener("click" , ()=>{
    btn1.classList.remove("stylingTab");
    btn2.classList.add("stylingTab");
    btn3.classList.remove("stylingTab")

    tab1.classList.add("d-none");
    tab2.classList.remove("d-none");
    tab3.classList.add("d-none")
})

btn3.addEventListener("click" , ()=>{
    btn1.classList.remove("stylingTab");
    btn2.classList.remove("stylingTab");
    btn3.classList.add("stylingTab");

    tab1.classList.add("d-none");
    tab2.classList.add("d-none");
    tab3.classList.remove("d-none")
})
