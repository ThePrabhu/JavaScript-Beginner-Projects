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

// 🔹 SECTION B — 10 LOGIC-BASED TIMER QUESTIONS
// (These appear in real apps repeatedly)

// 11️⃣ Start counting when button is clicked, stop when another button is clicked
number = document.querySelector(".num2");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

let myTimer = 0;

let intervalID = null; // Variable to store the interval

startBtn.addEventListener("click", () => {

    if (intervalID !== null) return;


    intervalID = setInterval(() => {
        myTimer++; // Increment the number
        number.textContent = myTimer; // Update the screen!
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalID);
    intervalID = null;
    
});
// 12️⃣ Disable a button for 5 seconds after clicking, then re-enable
// (Used in OTP / payments / resend buttons)
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  // Disable the button
  button.disabled = true;
  button.textContent = "Wait 5s...";

  // Re-enable after 5 seconds
  setTimeout(() => {
    button.disabled = false;
    button.textContent = "Click Me";
  }, 5000); // 5000 ms = 5 seconds
});


// 13️⃣ Show a loader for 3 seconds before showing content
const loader = document.querySelector(".loading"); //just making as good as mine
const content = document.querySelector(".mrBean")

setInterval(() => {
    loader.classList.add("d-none");
    content.classList.remove("d-none");
  }, 3000); // 3 seconds

  setInterval(()=>{
    loader.classList.remove("d-none");
    content.classList.add("d-none");
  }, 6000); // 6 seconds


// 14️⃣ Auto-hide a notification after 4 seconds
const model = document.querySelector(".modelContainer");

setTimeout(()=>{
    model.classList.add("d-none");
}, 4000)

// 15️⃣ Create a timer that resets if user clicks again before it finishes
// (Debounce thinking – important later)

// 16️⃣ Start a countdown when page opens, stop if user navigates away (simulate with button);

// 17️⃣ Start a timer only once even if button is clicked multiple times
// (Hint: flag variable)
// 18️⃣ Show “Session Expiring in 10s” countdown
// 19️⃣ Pause a running timer and resume it later
// 20️⃣ Create a progress bar that fills gradually over 5 seconds