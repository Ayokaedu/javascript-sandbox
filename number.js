// Number data type eg 9, 0.6, 1197
const myAge = 87

// number methods are function that can be perform on numbers examples
// toFixed (it rounds number based on the number of decimal provided)
const num = 9.5678;
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(2));
console.log(num.toFixed(3));

// + - * /
const x = 7;
const y = 7;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

// ** raaised to thr power(exponent)
console.log(3**2);

// modulus % (return the remainder of a division)
console.log(3%2);
console.log(100%10);

// order of operation (BODMAS)
// 4 + 2 * 3 ** 2;
let likes = 0;
// likes = likes + 1
// likes = likes + 1
// likes = likes + 1
// likes = likes - 1
likes++;
likes++;
likes++;
likes--;
console.log('Likes', likes);

let savings = 5000;
// savings = savings + 3000;
savings += 3000;
// savings = savings + 10000;
savings += 10000
// // 7000
// savings = savings - 7000;
savings -= 7000;
// 525
// savings = savings - 525;
savings -= 525;
console.log(savings)

savings += 2000

const fullName = 'Woleola Aisha';
const accountNumber = 3802770347;
let myBalance = 4000;
// Jan transaction
// credited 10,000, debited 200 as sms charges, received gift 3000, gifted someone 1200
myBalance += 10000;
myBalance -= 200;
myBalance += 3000;
myBalance -= 1200;
console.log('My Balance', myBalance);
// Woleola Aisha with account number: 3802770347 has a balance of myBalance
const accountStatement = `${fullName} with account number ${accountNumber} has a balance of ${myBalance.toFixed(2)}`;
console.log(accountStatement);

// NaN means not a number









