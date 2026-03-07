function cook(done){
    console.log("Cooking food!");

    setTimeout(done, 3000);
}

function done(){
    console.log("Cooking finished!")
}

cook(done);

function func(a , b , callback){
    console.log("Loading....")
    setTimeout( ()=> callback(a , b), 2000);
}

function add(a , b){
    let result = a + b;
    console.log("result", result);
}

func(3 , 5 , add);

function runTsk(cb){
    console.log("Your task was starting!!...");
    setTimeout(cb , 2000);
};

function tsk(){
    console.log("Ready!")
}

runTsk(tsk);

function userGreet(username , cb){
    console.log("Username : " , username);
    setTimeout(cb , 2000);
}

function userData(){
    console.log("Welcome to our application.........")
}

userGreet("Prabhu" , userData);

 detials = {
        "name" : "prabhu", "age" : 18,
    }
function getUser(cb){
   setTimeout(cb , 2000);
}

function userName(){
    console.log(detials.name);
}

getUser(userName);




function checkUser(user , pwd, cb1 , cb2){
    if(user === "prabhu" && pwd === 123){
        console.log("Loading....");
        setTimeout (cb1 , 2000);
    }else{
        console.log("Loading...");
        setTimeout(cb2 , 2000);
    }
}

function success(){
    console.log("Welcome...")
}

function failure(){
    console.log("enter correct details!!");
}

checkUser("prabhu" ,  123 , success , failure);


// let arr = [2, 5, 6, 7, 8];

// let max = arr[0]; // start with the first element
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log("max element:", max);

function loginFlow() {
  validateUser(() => {
    fetchProfile(() => {
      fetchNotifications(() => {
        renderDashboard(() => {
          console.log("✅ Dashboard fully loaded!");
        });
      });
    });
  });
}

function validateUser(callback) {
  console.log("Validating user...");
  setTimeout(() => {
    console.log("User validated");
    callback();
  }, 2000);
}

function fetchProfile(callback) {
  console.log("Fetching profile...");
  setTimeout(() => {
    console.log("Profile fetched");
    callback();
  }, 2000);
}

function fetchNotifications(callback) {
  console.log("Fetching notifications...");
  setTimeout(() => {
    console.log("Notifications fetched");
    callback();
  }, 2000);
}

function renderDashboard(callback) {
  console.log("Rendering dashboard...");
  setTimeout(() => {
    console.log( "Dashboard rendered");
    callback();
  }, 2000);
}


loginFlow();

const myPromise = new Promise((resolve, reject) => {
  // resolve("Success!");
  reject("Failure");
});

myPromise.then(result => {
  console.log(result);
});

myPromise.catch(result => {
  console.log(result)
})

function user(name){
  return new Promise((resolve , reject) =>{
    setTimeout( ()=>{
      if ( name === "Prabhu"){
        resolve("success!")
      }else{
        reject("failure")
      }
    })
  })
}


user("prabhu")
  .then( message => console.log(message))
  .catch( message => console.log(message))


function double(num){
  return new Promise((resolve) => {
    setTimeout( () =>{
      resolve(num * 2)
    })
  })
}

double(5)
  .then(message => double(message))
  .then(final => console.log(final))


let myP = new Promise((reject) => {
    setTimeout(()=>{
      reject("something is wrong")
    }, 2000)
  })

myP
  .then(message => console.log(message))
  .catch(mes => console.log(mes))




// function myNumFunc(num){
//   return new Promise((resolve , reject) => {
//     if ( num > 10){
//       resolve("Number greater than 10")
//     }else{
//       reject("NUmber less than 10")
//     }
//   })
// }

// myNumFunc(11)
//   .then(msg => console.log(msg))
//   .callback(err => console.log(err))

function myNumFunc(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Number greater than 10");
    } else {
      reject("Number less than 10");
    }
  });
}

myNumFunc(11)
  .then(msg => console.log(msg))   // handles resolve
  .catch(err => console.log(err)); // handles reject

  