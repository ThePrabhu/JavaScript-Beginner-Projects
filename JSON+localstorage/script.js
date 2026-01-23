let form = document.querySelector("#myForm");

let name = document.querySelector("#name");
let age = document.querySelector("#age");
let city = document.querySelector("#city");


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
    
    let userDetails = {
    "name": name.value.trim(),
    "age" : age.value.trim(),
    "city" : city.value.trim()
    };

    let jsonData = JSON.stringify(userDetails);

    localStorage.setItem("user" , jsonData);
})
