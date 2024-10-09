// ASYNCHRONOUS JS -It is a non blocking code

//SYNCHRONOUS JS is a blocking code
console.log("a");
console.log("b");
console.log("c");


console.log(1);

setTimeout(() => {
    console.log(2);
}, 5000);

console.log(3);


// API - Application programming interface