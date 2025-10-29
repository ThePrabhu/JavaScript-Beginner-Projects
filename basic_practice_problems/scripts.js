let gameNum = 45;
let userNum = prompt("Guess the number : ")
while (userNum != gameNum){
    userNum = prompt("You guess a wrong number, try guessing again : ")
}
console.log("congratulations your guess was right!")