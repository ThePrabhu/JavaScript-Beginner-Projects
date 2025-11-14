const box = document.querySelector(".box");
const btn = document.querySelector("#colorChangeBtn");

btn.addEventListener("click" , function(){
    changeColor = getColorChange()
    box.style.backgroundColor=changeColor;
})

function getColorChange(){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g} , ${b})`

}
getColorChange()
