
// Write a unction that takes in a string and converts the first letter of everyword to uppercase
const firstLetter =  (str) => {
const result = str.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});
return result.join('');
}
console.log(firstLetter('fullstack is fun and strssful'));

// Write a function that checks if the parameter is a number or not and returns true or false
const checkNum = (arg) => typeof arg === 'number';
console.log(checkNum('hllo'));

const currencyData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];

// Ititerate over the currency data and log a message
// The Exchange rate for USD to NGN is 1700

currencyData.map((currency)=>{
 console.log(`The Exchange rate for ${currency.from} to ${currency.to} is ${currency.rate}`);
})

// Write a function that returns the exchange rate for that currency pair or an appropriate message if the pair is not found
const findCurrencyPair = (baseCurrency, toCurrency) => {
    // Search through the currencyData to find the match
  const pair = currencyData.find(
    (currency) => currency.from === baseCurrency && currency.to === toCurrency
  );
  if (pair) {
    console.log(`The Exchange rate ${pair.from} to ${pair.to} is ${pair.rate}`);
  } else {
    console.log("The currency pair cannot be found");
  }
};
// search through the currency data to find a match.
findCurrencyPair("USD","NGN");

// Write a conversion function
const convertCurrency = (baseCurrency, toCurrency, amount) => {
  const pair = currencyData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    //conversion
    console.log(
      `${amount} ${pair.from} is equaivalent to ${amount * pair.rate} ${
        pair.to
      }`
    );
  } else {
    console.log("Currency pair not found");
  }
};

convertCurrency("GBP", "NGN", 500);


// Write a function to add to the currency data list
// AUS NGN 300

const newCurrency = (baseCurrency, toCurrency, rate) => {
currencyData.push({ baseCurrency, toCurrency, rate });
console.log(currencyData);
};
newCurrency('AUS', 'NGN', 1040)














// convertCurrency("USD", "NGN", 500);
// const addNewCurrency = (baseCurrency, toCurrency, rate) => {
//   const newCurrency = {
//     from: baseCurrency,
//     to: toCurrency,
//     rate: rate,
//   };
//   currencyData.push(newCurrency);
//   console.log(currencyData);
// };
// addNewCurrency("AUS", "NGN", 400);
 

// const mySpecialNum = nums.find((num) => {
//   return num >= 5;
// });

// const findCurrencyPair = (baseCurrency, toCurrency){
// const pair currencyDate.find((currency) =>) {return currency.from === baseCurrency && curency.to === toCurrency};
// if (pair) {
// console.log(`The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate`}
// } else {
//   console.log("The currency pair cannot be found");
// }
// }
// findCurrencyPair("YEN", "NGN");