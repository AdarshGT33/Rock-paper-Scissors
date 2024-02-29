let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");

const generateCompRandom = () => {
    let options = ["rock", "paper", "scissors"];
    let reqIdx = Math.floor(Math.random() * 3);
    return options[reqIdx];
}

const drawGame = () => {
    message.innerText = `It was a Draw!\uD83D\uDC4D`;
    message.style.backgroundColor = "#2e1c2b";
    message.style.color = "#eaeaea";
}

const showWinner = (userWin) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You win!\uD83E\uDD73`;
        message.style.backgroundColor = "#84e296";
        message.style.color = "#856084";
    }else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        message.innerText = `You lose!\uD83D\uDE01`;
        message.style.backgroundColor = "#ff3e41";
        message.style.color = "#4c3541";
    }
}

const playGame = (userChoice) => {
    console.log(`user choice : ${userChoice}`);
    let computerChoice = generateCompRandom();
    console.log(`computer choice : ${computerChoice}`);
    if (userChoice === computerChoice){
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});