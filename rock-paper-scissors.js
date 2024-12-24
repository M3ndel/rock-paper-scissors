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
	const hscore = document.querySelector('#human_score')
	const cscore = document.querySelector('#computer_score')

	if (humanChoice == computerChoice)
		return console.log('Draw!')
	else if (humanChoice == 'rock') {
		if (computerChoice == 'paper') {
			computerScore++
			console.log('You lose! Paper beats Rock')
		}
		else {
			humanScore++
			console.log('You Win! Rock beats Scissors')
		}
	}
	else if (humanChoice == 'paper') {
		if (computerChoice == 'scissors') {
			computerScore++
			console.log('You lose! Scissors beats Paper')
		}
		else {
			humanScore++
			console.log('You Win! Paper beats Rock')
		}
		
	}
	else if (humanChoice == 'scissors') {
		if (computerChoice == 'rock') {
			computerScore++
			console.log('You lose! Rock beats Scissors')
		}
		else {
			humanScore++
			console.log('You Win! Scissors beats Paper')
		}
	}

	hscore.textContent = humanScore
	cscore.textContent = computerScore
}

function playGame() {
	let humanSelection = getHumanChoice();
	let computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection)

	// humanSelection = getHumanChoice();
	// computerSelection = getComputerChoice();
	// playRound(humanSelection, computerSelection)

	console.log(`human ${humanScore} : computer ${computerScore}`)
}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', () => {
	playRound('rock', getComputerChoice())
	console.log(`human ${humanScore} : computer ${computerScore}`)

	if (humanScore >= 5) {
		alert('player won!')
		humanScore = computerScore = 0
	}
	else if (computerScore >= 5) {
		alert('computer won!')
		humanScore = computerScore = 0
	}
})

paperBtn.addEventListener('click', () => {
	playRound('paper', getComputerChoice())
	console.log(`human ${humanScore} : computer ${computerScore}`)

	console.log(`human ${humanScore} : computer ${computerScore}`)
	if (humanScore >= 5) {
		alert('player won!')
		humanScore = computerScore = 0
	}
	else if (computerScore >= 5) {
		alert('computer won!')
		humanScore = computerScore = 0
	}
})

scissorsBtn.addEventListener('click', () => {
	playRound('scissors', getComputerChoice())
	console.log(`human ${humanScore} : computer ${computerScore}`)

	console.log(`human ${humanScore} : computer ${computerScore}`)
	if (humanScore >= 5) {
		alert('player won!')
		humanScore = computerScore = 0
	}
	else if (computerScore >= 5) {
		alert('computer won!')
		humanScore = computerScore = 0
	}
})