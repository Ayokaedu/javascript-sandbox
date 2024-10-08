// OBJECT  are descriptive because they have the below
// {key : value, key2 : value}
// key and value pairs are called object properties
const person = {
    firstName : 'Aisha',
    lastName : 'Mubashir',
    age: 64,
    isMarried: true,
    friends: ['John', 'Jane'],
    workHours: {
        Monday: '8 hours',
    },
};
console.log(person);

// How to access properties inside of an object 
// there are two way to go about which includes; 
// 1. Dot notation = objName.propertyName
 console.log(person.age);
 console.log(person.friends);
//  console.log(car);    
//  undefined
console.log(person.workHours.Monday);

 
// 2. Bracket notation  objName['propertyName']
console.log(person['age']);
console.log(person['friends']);
console.log(person['workHours']['Monday'])


// Adding a new property to an object
person.car = 'Benz';
person.hobbies = ['running', 'sleeping'];
console.log(person);

// Removing a property from an object, delete key can also be used
delete person.isMarried
console.log(person);

// Object method - are functions a developer writes to work on an object

const book = {
    title: 'The Gods Are Not To Blame',
    author: 'Ola Rotimi',
    yearPublished: 1971,
    genre: 'Tragedy',
    isBestSeller: true,
    rating: 4.5,
    summary: function() {
        // The book titled The God Are Not To Blame and it is writtten by Ola Rotimi and has a rating of 4.5
        console.log(`The Book is titled ${this.title} and it is written by${this.author} and was published in ${this.yearPublished}, the genre is ${this.genre} and has a rating of ${this.rating}`);
    },
}

book.summary();
book.title
// The keyword - Insde of a function declaration in an object, it refers to the object

// Object destructuring - It is a mordern and faster way of picking properties in an object. It allow us to rename variable if it is clashing in a script

const user = {
    username: 'user001',
    fullName: 'Ayoka Edu',
    password: '********',
    profilePic: 'avatar',
    followers: ['Eniola', 'Mercy', 'Hussainah'],
    followng: ['Pious deen', 'Imam Suleiman', 'Mufti Menk'],
    dateofAccount: 2020,
    posts: {
        title: 'Free Palestine',
        desc: 'Palestine lives matter'
    }
};
user.profilePic;
user.posts.title
const { username, profilePic, dateofAccount, password} = user;
const { posts:{ title, desc} } = user
console.log(title, desc);

const myMainUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const email = "mubarak@google.com";
//aliase
const {
  id,
  email: mainUserEmail,
  address: {
    street,
    geo: { lat: latitude, lng: longitude },
  },
  company: { name, catchPhrase, bs },
} = myMainUser;

// Array Destructuring
// when destruturing in an array, the integrity must be kept
const peoplesNames = ['Ajao', 'Ayoka', 'Ayinde', 'Alabi']
peoplesNames[1]
const [one, , second] = peoplesNames;
console.log(one, 
    second);
