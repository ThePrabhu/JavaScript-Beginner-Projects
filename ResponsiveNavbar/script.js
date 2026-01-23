const sideBarMenu = document.querySelector(".sidebarContainer");
const hamBrgerIcon = document.querySelector("#hamburgerIcon");
const crossIcon = document.querySelector("#birdClose");

hamBrgerIcon.addEventListener("click" , ()=> {
    sideBarMenu.classList.remove("hideClass");
    crossIcon.classList.remove("hideClass");
    hamBrgerIcon.classList.add("hideClass");
})

crossIcon.addEventListener("click" , ()=> {
    sideBarMenu.classList.add("hideClass");
    crossIcon.classList.add("hideClass");
    hamBrgerIcon.classList.remove("hideClass");
})