let result = document.querySelector("#result");

const addBtn = document.querySelector("#add");
const substractBtn = document.querySelector("#substract");
const devideBtn = document.querySelector("#devide");
const multiplyBtn = document.querySelector("#multiply");


addBtn.addEventListener("click" , function(){
    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);
    result.textContent = `Result =  ${num1 + num2}`
})

substractBtn.addEventListener("click" , function(){
    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);
    result.textContent = `Result =  ${num1 - num2}`
})

devideBtn.addEventListener("click" , function(){
    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);
    if (num2 == 0){
        result.textContent = `can't devide with zero/null value`
    }else{
        result.textContent = `Result =  ${num1 / num2}`
    }
})

multiplyBtn.addEventListener("click" , function(){
    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);
    result.textContent = `Result =  ${num1 * num2}`
})
