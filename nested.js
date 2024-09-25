let userChoice = 'rock'
let computerChoice = 'rock'
// paper rock scissors

if (userChoice === computerChoice) {
    console.log('This is a tie');
} else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
        console.log('User wins, Rock smashes scissors');
    } else {
        console.log('Computer wins, Paper cover rock');
    }
}
