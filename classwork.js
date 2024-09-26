// determine whether variables should be const or let
// create a variable named my country set it to whatever value
const myCountry = 'Nigeria';
// create a variable called my age set it to your value
let myAge = 71
// create a variable called fullName and set it to any value
const firstName = 'Aisha';
const lastName =  'Woleola';
const fullName = firstName + " " + lastName;
// log the length of your country as well as length of your full to the console
console.log(myCountry.length);
console.log(fullName.length);
myAge++


// convert the full name to all upper case
 console.log(fullName.toUpperCase());
 
// extract just the first name in your fullname and log it on console
console.log(firstName.slice(0, 5));

// write a short description of the persom in this format
// e.g Peter Pan is a citizen of Portugal
const Name = 'citizen';
const country = 'Portugal';
const description = `Peter Pan is a ${Name} of ${country} `
console.log(description);



// increase the age declared above by 1
// myAge += 1
console.log(myAge+1);


// log the remainder of when 100 is divided by 7 to the console
console.log(100 / 7 );

// let remainder = 100 % 7;
// console.log(remainder);

// check whetger the country variable starts with h
console.log(myCountry.startsWith('h'));

const marksMass = 95;
const marksHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const marksBmi = marksMass / marksHeight ** 2;
const johnsBmi = johnMass / johnHeight ** 2;
const markHigherBMI = marksBmi > johnsBmi;

console.log(marksBmi, johnsBmi);

console.log(markHigherBMI);

// if (markHigherBMI) {
//     console.log("Mark's BMI is higher than John's!");
// } else {
//     console.log("John's BMI is higher than Mark's!");
// }

// comment out the first conditional statement 
// improve it to cater for if the Mark's bmi and John's bmi are equal

if (marksBmi > johnsBmi) {
    console.log("Mark's BMI is higher than John's!");
} else if ( johnsBmi > marksBmi){
     console.log("John's BMI is higher than Mark's!");
} else {
    console.log("John's BMI and Mark's BMI is equal");
}
    
console.log('hello'/6);

    let Dolphins = 96;
    let Dolphins2 = 108;
    let Dolphins3 = 89;
    // let average = 285;

    let totalDolphinScore = (Dolphins + Dolphins2 + Dolphins3) / 3;

    let Pandas = 88;
    let Pandas1 = 91;
    let Pandas2 = 110;
    // let average2 = 289;

    let totalPandaScore = (Pandas + Pandas1 + Pandas2) / 3;

    let avgDolphin = totalDolphinScore;
    let avgPanda = totalPandaScore;

    console.log(`Average Dolphin score is ${avgDolphin}`);

    console.log(`Average Panda score is ${avgPanda}`);

    // if (avgDolphin >= avgPanda) {
    //     console.log('Dolphin Wins');
    // } else {

    // }

    if (avgDolphin > avgPanda) {
      console.log("Dolphinns Wins");
    } else if (avgDolphin < avgPanda) {
      console.log("Panda Wins");
    } else {
      console.log("This is a tie");
    }

    if (avgDolphin > avgPanda && avgDolphin >= 100) {
      console.log("Dolphin wins");
    } else if (avgPanda < avgDolphin && avgPanda >= 100) {
      console.log("Panda wins");
    } else {
      console.log("No team wins");
    }

    if (avgDolphin > avgPanda && avgDolphin >= 100) {
      console.log("Dolphin wins");
    } else if (avgPanda < avgDolphin && avgPanda >= 100) {
      console.log("Panda wins");
    } else if (
      avgDolphin === avgPanda &&
      avgDolphin >= 100 &&
      avgPanda >= 100
    ) {
      console.log("This is a draw");
    } else {
      console.log("No team wins");
    }




