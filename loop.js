// LOOPS(another name is iteration, recursion) are way you can perform repititve task examples include for, while and do while
// FOR LOOP

// for (intializer used for declaring a variable; condition either true or false, as long as condition is true it keeps going; increment: it condition that terminates a keyword at a point ){line of code}
// infiniteloop

for (let i = 0; i < 10; i++){
    console.log('loop');
}

// write a loop that returns the sum natural numbers between 0 and 100
let sum = 0;
for (let i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum);

let y = 0;
while (y <= 5) {
// perform action
console.log('In the loop');

    y++
}

let num = 1;
while (num <= 10) {
  console.log("Current Value of Num is" + num);

  num++;
}

// do while loop( it is going to do an action once whether condition is true or false)

let x = 5;
do {
  console.log('I am in the loop');
  x++;
} while (x <= 2);
// Continue skips a value and keeps it going and Break gets to a point where the action stops