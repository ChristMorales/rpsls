let userWinCount = 0;
let computerWinCount = 0;

let currentUserChoice;
let currentComputerChoice;

let gameStatus;

function randomComputer() {
    let randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
        case 0:
            currentComputerChoice = "spock";           
            break;
        case 1:
            currentComputerChoice = "scisors"            
        break;
        case 2:
            currentComputerChoice = "paper"            
        break;
        case 3:
            currentComputerChoice = "rock"            
        break;
        case 4:
            currentComputerChoice = "lizard"            
        break;
        default:
            console.log("There's something wrong")
    }
}

function game(userChoice, computerChoice){
    if ((userChoice === "spock" && (computerChoice === "rock" || computerChoice === "scisors")) ||
            (userChoice === "scisors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
            (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
            (userChoice === "rock" && (computerChoice === "scisors" || computerChoice === "lizard")) ||
            (userChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper"))) {
        userWinCount++;
        gameStatus = "You win this round"
        
    } else {
        computerWinCount++
        gameStatus = "Computer wins this round"
    }  
console.log("user: " + userWinCount + " Computer: " + computerWinCount); 
console.log(currentComputerChoice, currentUserChoice);
$(".game-status").text(gameStatus);     
}

$("#select .btn").click(function(){
    currentUserChoice = $(this).attr("id");
    randomComputer();
    game(currentUserChoice, currentComputerChoice);
})

