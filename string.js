// Data Types
// Are different ways we can interact with different programming laguage
// There two data types 1. Primitive 2. Complex
// Primitive data types are the types of data that can only hold one value at a time
// While complex data types are types of data types that can hold more than one data values
// Types of primitive datat types which include strings, number, boolean, null, undefined
// Types of complex include object, arrays

// Examples of strings are '' "", number are 123456, boolean
// String- they are  characters always in quotation marks either single ' or double ""
const firstName = 'John';
const lastName = 'Doe';
console.log(firstName);
console.log(lastName);

// String Properties length, concatenation(joining one string to another)
// string.length
console.log(firstName.length);
console.log(lastName.length);
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// String Methods- functions that can be perfirned on strings
//toupperCase, toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//replace, replaceAll
console.log(fullName.replace("o","*"));
console.log(fullName.replaceAll("o", "*"));

// includes 
console.log(fullName.includes("g"));
// startsWith, endsWith
console.log(fullName.startsWith("Jo"));
console.log(fullName.endsWith("e"))

// Myemail
const myEmail = "ayokaedu@gmail.com";
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));

// indexOf, lastIndexOf (occurence of character)
console.log(myEmail.indexOf("o"));
console.log(myEmail.lastIndexOf('o'));
// 
console.log(myEmail.charAt(5));
// concat
console.log(myEmail.concat('example'));

// trimming is used in removing wide spaces either from the start or at the end
const userName = '     user001     '
console.log(userName.length);
console.log(userName.trim());

// trimStart, trimEnd
console.log(userName.trimStart());
console.log(userName.trimEnd());

// extract portions of a string(used to remove a part of the string)
// slice(start, end (non-inclusive), substring, substr(it takes in two parameter which includes start, num of characters we want)
// substr(0, 4)

const surname = 'Woleola';
console.log(surname.slice(1, 4));
console.log(surname.substring(1, 7));
console.log(surname.substr(0, 5));

// template literals allows us to format var into strings
const author = 'Ngozi Adiche';
const bookTitle = 'Americanah';
const yearPublished = '2016';

// The book amercianah written by
// Ngozi Adichie was published in year 2016
const description =
"The book" +
bookTitle +
" was written by " +
author +
"was published in the year " +
yearPublished

console.log(description);
// backticks `the bok ${bookTitle}`
const description2 = `The book ${bookTitle} written by ${author} was published in the year ${yearPublished}`
console.log(description2);

const name1 = "Ade";
const name2 = "Wale";
// Ade is a boy
const sentence = `${name1} is a boy` ;
// His name is Wale
const sentence2 = `His name is ${name2}`;

// `Tinubu said and i quote 'let the poor breathe''
const quote = `Tinubu said and I quote "Let the poor breathe"`
console.log(quote);













