// Local Storage
// set something in the localstorage

// localStorage.setItem('token', 'Hello');

// Getting something from the localstorage
// localStorage.getItem('token');

// Remove values in the localstorage
// localStorage.removeItem('token');

// Clear our local storage
// localStorage.clear()

// Local storage can only take in strings

const user = {
    id: 1,
    theme: 'Cockroach brown'
};

// JSON.stringify it is use in changing any variable to strings
// Javascript Object Notation( The key and value must be in a double quotation mark)

localStorage.setItem("user", JSON.stringify(user));
// JSON.PARSE
localStorage.getItem("user");
JSON.parse(localStorage.getItem("user"));



