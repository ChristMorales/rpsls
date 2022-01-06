let userWinCount = 0;
let computerWinCount = 0;

let currentUserChoice;
let currentComputerChoice;

let gameStatus;
let started = false;
let round = 0;

let checkIcon = "far fa-check-circle";

function startGame(){
    $("#select .btn").click(function(){
        started = true;
        currentUserChoice = $(this).attr("id");
        randomComputer();
        round++;
        
        $(".weapon-round").append("<h3> Round" + round + "</h3>");
        $(".user.weapon").append($(weaponIcons[currentUserChoice])).addClass("rotate");
        $(".computer.weapon").append($(weaponIcons[currentComputerChoice]));
        game(currentUserChoice, currentComputerChoice);
        chooseWinner(userWinCount, computerWinCount);
    })
}

$(".start-button").click(function(){
    started = true;
    startGame();
    $(this).addClass("none-display");
    $(".restart-button").removeClass("none-display");
})

$(".restart-button").click(function(){
    restartGame();  
    $(".start-button").removeClass("none-display");
    $(this).addClass("none-display");
    $(".play-again").addClass("none-display");
})

function restartGame () {
    if (userWinCount === 5){
        $(".you-win").addClass("none-display");
    } else if (computerWinCount === 5){
        $(".you-loose").addClass("none-display");
    }  
    resetIcon(userWinCount, computerWinCount);  
    userWinCount = 0;
    computerWinCount = 0;
    started = false;
    round = 0;
    gameStatus = " ";    
    $(".game-status").text(gameStatus); 
    $(".game-status").removeClass("none-display");
}



function chooseWinner(userWinCount, computerWinCount) {
    if (userWinCount === 5|| computerWinCount === 5){
        if (userWinCount === 5){
            $(".you-win").removeClass("none-display");
        } else if (computerWinCount === 5){
            $(".you-loose").removeClass("none-display");
        }
        $("#select .btn").off();
        $(".game-status").addClass("none-display");
        $(".play-again").removeClass("none-display");
    }
}
    

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
        greyIcon("user", userWinCount);
        gameStatus = "You win this round"
    } else if (userChoice === computerChoice){
        gameStatus = "Its a tie";        
    } else {
        computerWinCount++
        greyIcon("computer", computerWinCount);
        gameStatus = "Computer wins this round"
    }  
console.log("user: " + userWinCount + " Computer: " + computerWinCount); 
console.log(currentComputerChoice, currentUserChoice);
$(".game-status").text(gameStatus);     
}

function greyIcon(player, number){
    $(".grayed" + number + "." + player + "-grey").removeClass("grayed");
}



function resetIcon(userWinCount, computerWinCount){
    for (let i = 1; i <= userWinCount; i++){
        let elem = ".grayed" + i + ".user-grey";
        $(elem).addClass("grayed");
        console.log("ok user " + i);
        console.log(elem);
    }
    for (let i = 1; i <= computerWinCount; i++){
        let elem = ".grayed" + i + ".computer-grey";
        $(elem).addClass("grayed");
        console.log("ok computer " + i);
        console.log(elem);
    }
}


let weaponIcons = {
    rock : '<i class="far fa-hand-rock"></i>',
    paper : '<i class="far fa-hand-paper"></i>',
    scisors : '<i class="far fa-hand-scissors"></i>',
    lizard : '<i class="far fa-hand-lizard"></i>',
    spock : '<i class="far fa-hand-spock">',

}
