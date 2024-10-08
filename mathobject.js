// MATH OBJECT 
console.log(Math.PI);

// Math Methods
// round, ceil, floor, trunc, random, max, min, power, sqrt

console.log(Math.pow(4,4));
// 4 **4
console.log(Math.sqrt(9));

console.log(Math.max(10, 2, 56, 78));

console.log(Math.min(5, 6, 7, 8, 9, 19));

// Methods that used on decimal numbers
console.log(Math.round(9.56));

console.log(Math.ceil(-9.3)); 
// round up

console.log(Math.floor(9.6));
// round down

console.log(Math.trunc(-10.7));
// It totally removes the decimal part

// Random - it generate pseudo random number between 0 and 1
console.log(Math.random(67));

// 0 - 5
const randomNumber = Math.trunc(Math.random() * 6);
console.log(randomNumber);

const customers = ['Timi', 'Eniola', 'Aisha', 'Olumide', 'Sesan'];
const numOfCustomers = customers.length
const randomCustomerPosition = Math.floor(Math.random() * numOfCustomers);
console.log(customers[randomCustomerPosition]);







