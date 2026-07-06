let max=100
const random=Math.floor(Math.random()*max)+1
let guess=prompt("Guess the number:")
while(true){
    if(guess=="quit"){
        console.log("quitting the game")
        break;
    }
    if(guess==random){
        console.log("congrats!! your guess is correct")
        break;
    }
    else if(guess>random){
        guess=prompt("your guess is higher! please try again later")
    }
    else if(guess<random){
        guess=prompt("your guess is lower! please try again later")
    }
}