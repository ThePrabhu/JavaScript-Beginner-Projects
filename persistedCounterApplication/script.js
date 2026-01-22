// 

let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;

    localStorage.setItem("currentValue", updatedCounterValue); // ✅ save number
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
 let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;

    localStorage.setItem("currentValue", updatedCounterValue); // ✅ save number
}

function onReset() {
    counterElement.textContent = 0;
    counterElement.style.color = "black";
    localStorage.setItem("currentValue", 0); // ✅ reset storage too
}

// ✅ load persisted value on page load
let saved = localStorage.getItem("currentValue") || 0;

if (saved > 0){
    counterElement.style.color = "green"
}else if (saved === 0){
    counterElement.style.color = "black"
}else{
    counterElement.style.color = "red"
}

counterElement.textContent = saved;
