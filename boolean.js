// BOOLEAN VALUES (true or false)
const isMarried = false;

// comparison operators>< 
// == === loose equality (doesn't check data types)
// <= >= strict equality
// 6 > 9
console.log(6.5 > 9);
console.log(5 == "5");
console.log(5 === "5");

console.log(6.0 >= 6);
console.log(7.2 == '7.2');
console.log(5.0 === 5.0);
console.log(7 <= 8);
console.log(3 >= 7);
console.log(9.0 >= "90");
console.log(89 === "89");
console.log(4 + 4 >= 7);

// Logical operators and &&& or ||, not !
// (Yaba and Ikeja) (Yaba or Ikeja) && Once there's false in a value it automatically changes all to false. 
console.log(7 > 6 && 5 > 4); // t and t
console.log(5 >= 6 && 2== 2);
console.log(7 === 7 && 2 === 2);
console.log('a' === 'A' &&  2 === 2);
console.log(6 > 7 && 7 < 9 && 32 >= 8);

console.log(false || false);
console.log(6 > 7 || 5 < 8);

console.log(9 !== 9 && 2.0 > 2);

const country = 'Nigeria';
const isIsland = false;

// TRUTHY are any valid string AND FALSY VALUES are invalid
// strings 'Wale'
console.log(Boolean(' '));
// numbers All valid numbers whether  (-ve or +ve)
console.log(Boolean(-0.9));

// Null and Undefined are falsy value














































// Errors in Javascript 
// 1. Syntax error
// 2. Type error
// 3. reference error
// console.log(myAge);
// const fullName - 'Joh Doe';
// console.log(fullname);
// let age = 7;
// age++

// debug
// check your console