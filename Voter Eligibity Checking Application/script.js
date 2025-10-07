let name;
let age;

Display = document.getElementById("result");
name = window.prompt("Enter Your Name");
age = window.prompt("Enter Your Age");
if (Number(age) > 18){
    console.log(Display = document.getElementById("result").textContent= `${name} you eligible to vote`);
}else{
    console.log(Display = document.getElementById("result").textContent= `${name} your not eligible to vote`);
}
