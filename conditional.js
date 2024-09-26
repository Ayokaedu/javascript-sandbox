// Conditional Statement is used to perform an action based on condition
// control flow

const myBalance = 3000;
const transaction = 3000;
// if statement
// if (condition) {
// lines of code
// }
// if (false) {
//     console.log('Yes');
// }


if (myBalance >= transaction){
    console.log('Transaction successful');
}

// 18+
const age = 25;
if(age >= 18){
    console.log('You are eligible to vote');
}

// if the length of the password is 7 and above has @- good password
const password = 'bemsnssn@'

if(password.length >= 7 && password.includes('@')) {
    console.log('Good Password');
}

// if else statement gives two command 

// if(condition){
// first action
// }else {
// second action
// }

const age2 = 15;
// eligible 18+ or not

if (age2 >= 18) {
    console.log('You are eligible to vote');
} else {
    console.log('You are ineligible to vote, you must be 18');
}

// youth /underage 0-40 or aged 41
const age3 = 33;
if (age3 >= 0 && age3 <= 40) {
    console.log('You are in the youth/underage category');
} else{
    console.log('You are in aged category');
}

// Write an if else statement to check if a number is even or odd and log it on your console
// even numbers are those num that can be divided by two with no remainder
const odd = 40
if (odd % 2 === 0) {
    console.log('It is an even number');
    
} else {
    console.log('It is an odd number');
}
if (odd % 3 === 0) {
  console.log("It is an even number");
} else {
  console.log("It is an odd number");
}

//  declare two variables 1. savings 2. transactions
// write an if else statement to check if transaction will be successful 
// or not 
// and condition should be insufficient funds

const myBalance2 = 10000;
const transaction2 = 11000;
if (myBalance2 >= transaction2) {
    console.log("Transaction successful");
    
} else {
    console.log('Insufficent Funds');
}

// multiple conditions else if statement

// positive negative and zero

let myNum = 98;

if(myNum > 90) {
    console.log('This is a Positive number');
} else if (myNum < 98){
    console.log("This is a Negative number");
} else {
    console.log('This is Zero');
}

// underage 0-12 teen 13 - 19 adult 20 aged 41
const age4 = -41;
if (age4 >= 0 && age4 <= 12) {
    console.log('This is an underage');
} else if (age4 <= 13 && age4 <=19) {
     console.log("This is Teen");
} else if(age4 >=20 && age4 <= 40)
    {
    console.log('This is a Adult');
} else if (age4 >= 41){
    console.log('Aged');
} else{
    console.log('Invalid age, try again');
}
   
    // Switch Statement; They are used to perform differnt actions based on differnt condition, you must always break after every line action
// a- excellent, b- very good

let grade = 'C'

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("Fair");
    break;
  case "E":
  case "e":
    console.log("Poor");
  case "F":
  case "f":
    console.log("Failed");
    break;
  default:
    console.log("Invalid Grade");
}