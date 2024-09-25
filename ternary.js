// 
let myAtmPin = 5678;
let enteredPin = 5688;
const myBalance = 8000;
let transactionAmount = 10000;
if (myAtmPin === enteredPin){
    console.log('Perform Transaction');
} else {
    console.log('Incorrect Pin');
}

// Ternary operator
// condition ? first action : second action

myAtmPin === enteredPin
  ? console.log("Perform Transaction")
  : console.log("Incorrect Pin");

myBalance >= transactionAmount
? console.log('Transaction successful') 
: console.log('Insufficient funds');