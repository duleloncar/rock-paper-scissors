var enter = document.getElementById("yourName");

enter.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {

		event.preventDefault();
		document.getElementById("play").click();
	}
});

function enterName() {
	var playerName = document.getElementById("yourName").value;
	document.getElementById("player_name").innerHTML = playerName;

	if (document.getElementById("yourName").value == "") {
		document.getElementById("player_name").innerHTML = "Player";
		return
	};
};

function startGame() {
	const introScreen = document.querySelector(".intro");
	const match = document.querySelector(".main");

	introScreen.classList.add("fadeOut");
	match.classList.add("fadeIn");
};

var pScore = 0;
var cScore = 0;

function updateScore() {
	var playerScore = document.querySelector(".player_result");
	var computerScore = document.querySelector(".computer_result")
	playerScore.innerHTML = pScore;
	computerScore.innerHTML = cScore;
};

function getWinner(winner, playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {                    
		winner.innerHTML = "It is a tie!";
		console.log("Draw")
	}
	else if (playerChoice === "rock" && computerChoice === "scissors") {
		winner.innerHTML = "Player wins!";
		pScore++;
		updateScore();
		console.log("Player wins!");
	}
	else if (playerChoice === "scissors" && computerChoice === "paper") {
		winner.innerHTML = "Player wins!";
		pScore++;
		updateScore();
		console.log("Player wins!");
	}
	else if (playerChoice === "paper" && computerChoice === "rock") {
		winner.innerHTML = "Player wins!";
		pScore++;
		updateScore();
		console.log("Player wins!");
	}
	else {
		console.log("Computer wins!");
		winner.innerHTML = "Computer wins!";
		cScore++;
		updateScore();
	}
}

function choose(elem) {

	var winner = document.querySelector(".winner");

	var playerChoice = "";
	var computerChoice = "";

	var random = Math.floor(Math.random() * 3);

	switch (random) {
		case 0:
			computerChoice = "rock";
			document.querySelector(".computer-hand").src = "img/rock.png";
			break;
		case 1:
			computerChoice = "paper";
			document.querySelector(".computer-hand").src = "img/paper.png";
			break;
		case 2:
			computerChoice = "scissors";
			document.querySelector(".computer-hand").src = "img/scissors.png";
			break;
	};

	switch (elem) {
		case 1:
			playerChoice = "rock";
			document.querySelector(".player-hand").src = "img/rock.png";
			break;
		case 2:
			playerChoice = "paper";
			document.querySelector(".player-hand").src = "img/paper.png";
			break;
		case 3:
			playerChoice = "scissors";
			document.querySelector(".player-hand").src = "img/scissors.png";
			break;
	};

	console.log(playerChoice);
	console.log(computerChoice);

	getWinner(winner, playerChoice, computerChoice);
};