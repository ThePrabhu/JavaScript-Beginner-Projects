// selectors

// --form
let form = document.querySelector("#myForm");

// --input Values
let name = document.querySelector("#name");
let age = document.querySelector("#age");
let city = document.querySelector("#city");

// --To Display Output
let userDisplay = document.querySelector(".userNames");

// --model
const model = document.querySelector(".modelAlert");
let modelBtn = document.querySelector(".btn");

// --Saving Details in an array
let users = JSON.parse(localStorage.getItem("users")) || [];


// --Creating a List for each user in array
users.forEach(user => {
    let li = document.createElement("li");
    li.textContent = user.name;
    userDisplay.appendChild(li);
});


// saving data
let savedData = JSON.parse(localStorage.getItem("user"));

if (savedData){
    name.value = savedData.name || "";
    age.value = savedData.age || "";
    city.value = savedData.city || "";
}

// ------------------Saving data on SubmitEvent------------------------
form.addEventListener("submit" , (e)=> {
    e.preventDefault();
    
    // --saving user details in an object
    let userDetails = {
    "name": name.value.trim(),
    "age" : age.value.trim(),
    "city" : city.value.trim()
    };

    // --converting user details in JSON format & also adding in to an array
    let jsonData = JSON.stringify(userDetails);
    users.push(userDetails);

    // --calling model
    model.classList.remove("d-none");

    // --saving into localstorage
    localStorage.setItem("user" , jsonData);
    localStorage.setItem("users" , JSON.stringify(users));


})


// --closing model on clicking the buton
modelBtn.addEventListener("click" , ()=> {
    model.classList.add("d-none");
})
