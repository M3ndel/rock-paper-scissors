let humanScore = 0
let computerScore = 0

function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3)
	switch (choice) {
		case 0:
			return 'rock'
		case 1:
			return 'paper'
		case 2:
			return 'scissors'
		default:
			return 'ERROR'
	}
}

function getHumanChoice() {
	let choice = prompt('Pick your choice (rock/paper/scissors)')
	choice = choice.toLowerCase()
	if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
		console.log('invalid input')
		return getHumanChoice()
	}
	return choice
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice)
		return console.log('Draw!')

	if (humanChoice == 'rock') {
		if (computerChoice == 'paper') {
			computerScore++
			return console.log('You lose! Paper beats Rock')
		}
		humanScore++
		return console.log('You Win! Rock beats Scissors')
	}

	if (humanChoice == 'paper') {
		if (computerChoice == 'scissors') {
			computerScore++
			return console.log('You lose! Scissors beats Paper')
		}
		humanScore++
		return console.log('You Win! Paper beats Rock')
		
	}

	if (humanChoice == 'scissors') {
		if (computerChoice == 'rock') {
			computerScore++
			return console.log('You lose! Rock beats Scissors')
		}
		humanScore++
		return console.log('You Win! Scissors beats Paper')
	}
}

function playGame() {
	humanScore = 0
	computerScore = 0

	let humanSelection = getHumanChoice();
	let computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection)

	humanSelection = getHumanChoice();
	computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection)

	humanSelection = getHumanChoice();
	computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection)

	humanSelection = getHumanChoice();
	computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection)

	humanSelection = getHumanChoice();
	computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection)

	console.log('human ${humanScore} : computer ${computerScore}')
}

playGame();