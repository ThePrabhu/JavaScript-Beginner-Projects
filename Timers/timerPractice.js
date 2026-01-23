// 🔹 SECTION A — BEGINNER-FRIENDLY HANDS-ON QUESTIONS

// (Pure syntax + comfort — you should write code for all of these)

// 1️⃣ Print “Hello” after 2 seconds
setTimeout(()=>{
    console.log("Hello!")
}, 2000)


// 2️⃣ Print numbers from 1 to 5, one number every second
// 👉 Stop after 5
let count = 0;
let timer = setInterval(()=>{
   
    ++count;

    console.log(count);

    if (count === 5){
        clearInterval(timer)
    }
}, 1000)

// 3️⃣ Show “Loading…” immediately, then “Done” after 3 seconds

console.log("Loading....")

setTimeout(()=>{
    console.log("Done")
}, 3000);

// 4️⃣ Create a countdown from 5 → 0 (console is fine)
let countdown = 5;

let countD = setInterval(()=> {
    console.log(countdown);
    countdown--;


    if (countdown < 0){
        clearInterval(countD)
    }
}, 1000)

// 5️⃣ Print current time every second
console.log(Date.now())
// (HH:MM:SS using Date)

// 6️⃣ Change text color every second (red ↔ blue)
const blinkingBox = document.querySelector(".blinkingBox");

let num = 1;

setInterval(()=>{
    ++num;
    if (num % 2 === 0){
        blinkingBox.style.backgroundColor = "red";
    }else{
        blinkingBox.style.backgroundColor = "blue"
    }
}, 1000)

// 7️⃣ Show an alert after 4 seconds only once
setTimeout(() => {
    alert("This is an alert!")
}, 4000);

// 8️⃣ Create a timer that increases a number on screen every second
let number = document.querySelector(".num");

let increse = 0;
setInterval(()=>{
    number.textContent = increse;
    ++increse;
}, 1000);