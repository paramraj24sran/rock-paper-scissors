console.log("yo");

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(choice);
}

getComputerChoice();