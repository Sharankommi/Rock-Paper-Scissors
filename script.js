let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const us = document.querySelector("#user-score");
const cs = document.querySelector("#comp-score");

const genChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was Draw";
}

const showWinner = (userWin) =>{
    if(userWin){
        userscore++;
        us.innerText = userscore;
        msg.innerText = "You Win!!!";
    }else{
        compscore++;
        cs.innerText = compscore;
        msg.innerText = "You Lose";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissor" ? false : true;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});