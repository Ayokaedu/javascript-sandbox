// ASYNCHRONOUS JS -It is a non blocking code

//SYNCHRONOUS JS is a blocking code
// console.log("a");
// console.log("b");
// console.log("c");


// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 5000);

// console.log(3);


// API - Application programming interface

const url = "https://jsonplaceholder.typicode.com/users";

// PROMISES - (represent a container for a future value also it is an object that tell us the of an asynchronous value) Fufilled, Rejected, Pending
// .then method
fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);
}).catch((error) => {
    console.log(error);
    });

    // async //await

    const getUsers = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
       getUsers();


    //   REQUEST METHODS
    // Get - are diff techniques that cab be used to interact with API (retrieving data)
    // Post - it is use for creating a data
    // Patch - For updating
    // Delete - To remove data
    // Put - is also updating like Patch but the difference it does total overhauling
    
