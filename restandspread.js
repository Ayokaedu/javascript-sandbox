// Rest and Spread operator ...
// Rest Operator
const countries = ['Cuba', 'Algeria', 'Mexico', 'USA'];
  const [one, two, ...others] = countries;
  
  console.log(one);
  console.log(two);
  console.log(others);
  
  const country = {
    name: 'Nigeria',
    yearOfIndependence: 1960,
   officialLanguage: 'English',
    isIsland: false,
  }

  const {name, isIsland, ...remainder} = country;
  console.log(name, isIsland);
  console.log(remainder);

//Spread Operator ...
const africanCountries = ['Mali', 'Togo', 'Kenya', 'Uganda']
  const asianCountries = ['China', 'Japan', 'Bangladesh', 'Vietnam']
  
  const allCountries = [...africanCountries,'Congo', ...asianCountries, 'Australia', 'Luxembourg']
  console.log(allCountries);
  
  
// Optional chaining
const user = {
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    previousJobs: {
      one:  'Jumia',
      two: 'Paystack',
      three: 'Meta',
    },
};

console.log(user.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);

// if(user.profilePic) {
//   display picture
// <img src= {}
// }
// img src= {user?.profilePic}



// Nullish Coalescensce
// leftExpression ?? defaultValue
const username = 'Aisha';

console.log(username ?? 'Unknown User');
 