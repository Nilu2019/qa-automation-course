// ## Setup
// Create:
// - An array of **car brands**
// - An array of **numbers**
// - A sentence about cars
// - A decimal number

const carBrands = ["toyota", "bmw", "mazda", "honda"];
const numbers = [1, 2, 3, 4];
const sentence = "I like fast cars very much";
const decimalNumber = 25.7;

// ## PART 1: STRING + FUNCTIONS

// ### Task 1: Clean & Format Text

// Write a function that:

// 1. Takes a string
// 2. Removes extra spaces at the start and end
// 3. Converts the string to lowercase
// 4. Returns the cleaned string

function cleanText(Mazda2010) {
  return Mazda2010.trim().toLowerCase();
}
console.log(cleanText(" I dont like my car "));

// ### Task 2: First & Last Character
// Write a function that:
// 1. Takes a string
// 2. Returns:
//     - The first character
//     - The last character
// Must handle strings with spaces.

function firstAndLastChar(sentence) {
  let firstChar = sentence[0];
  let lastChar = sentence.at(-1);
  return { firstChar, lastChar };
}
console.log(firstAndLastChar("I like fast cars very much"));

// ### Task 3: Word Counter
// Write a function that:
// 1. Takes a sentence
// 2. Splits it into words
// 3. Returns the number of words
//Use string and array methods only.

function wordCounter(text) {
  const words = text.split(" ");
  return words.length;
}
console.log(wordCounter("My name is Nilufar"));

// ## PART 2: ARRAY + FUNCTIONS

// ### 🚗 Task 4: Brand Checker

// Write a function that:

// 1. Takes an array of car brands
// 2. Takes a brand name
// 3. Returns:
//     - `"Brand exists"` if found
//     - `"Brand not found"` otherwise

// 📌 Case-insensitive comparison required.

console.log(carBrands);

function myCar(brand) {
  let carMark = carBrands.includes(brand.toLowerCase());
  if (carMark) {
    return "Brand exists";
  } else {
    return "Brand not found";
  }
}
console.log(myCar("MAZDA"));

// ### Task 5: Get Last Brand

// Write a function that:

// 1. Takes an array of car brands
// 2. Returns the **last brand** using an array method

function lastChar() {
  return carBrands.at(-1);
}
console.log(lastChar());

//Task 6: Format Brands List
// Write a function that:
// 1. Takes an array of car brands
// 2. Returns a **single string** of brands separated by commas

function formatBrandsList(brandsArray) {
  return brandsArray.join(", ");
}

console.log(formatBrandsList(carBrands));

// ## PART 3: NUMBER + FUNCTIONS

// #Task 7: Safe Rounding

// Write a function that:

// 1. Takes a number
// 2. If the value is not a number → return `"Invalid number"`
// 3. Otherwise:
//     - Round it normally
//     - Return the result

function roundValue(num6) {
  if (isNaN(num6)) {
    return "Invalid number";
  }
  return Math.round(num6);
}

console.log(roundValue(25.7));
console.log(roundValue("25.7"));
console.log(roundValue("hello"));

// ### Task 8: Price Comparison

// Write a function that:

// 1. Takes two prices
// 2. Returns:
//     - `"Prices are equal"`
//     - `"First is higher"`
//     - `"Second is higher"`

//     - `"Second is higher"`
function comparePrices(price1, price2) {
  if (price1 === price2) {
    return "Prices are equal";
  } else if (price1 > price2) {
    return "First is higher";
  } else {
    return "Second is higher";
  }
}

const result = comparePrices(25, 30);
console.log(result);

//     - `"Prices are equal"`

function comparePricesTwo(price1, price2) {
  let result;

  if (price1 === price2) {
    result = "Prices are equal";
  } else if (price1 > price2) {
    result = "First is higher";
  } else {
    result = "Second is higher";
  }

  return result;
}

const resultTwo = comparePricesTwo(50, 50);
console.log(resultTwo);

// ### Task 9: Random Whole Number

// Write a function that:

// 1. Returns a random **whole number between 1 and 10**
// 2. Explain the formula in comments

// Function that just returns a random number between 1 and 10 // you can change this to any number between 1 and 10

function numberRandom() {
  return 2;
}

const numRandom = numberRandom();

const array = [
  "blue",
  "Red",
  "green",
  "yellow",
  "pink",
  "purple",
  "orange",
  "brown",
  "black",
  "white",
];

console.log(array[numRandom]);

// ## PART 4: CONDITIONAL THINKING

// ## Task 10: Budget Check

// Write a function that:

// 1. Takes:
//     - car price
//     - user budget
// 2. Returns:
//     - `"Within budget"`
//     - `"Over budget"`
//     - `"Invalid input"`

function budgetCheck(carPrice, userBudget) {
  if (carPrice < 0 || userBudget < 0) {
    return "Invalid input";
  }
  if (carPrice <= userBudget) {
    return "Within budget";
  } else {
    return "Over budget";
  }
}

console.log(budgetCheck(15000, 20000)); // "Within budget"
console.log(budgetCheck(25000, 20000)); // "Over budget"
console.log(budgetCheck(-5000, 20000)); // "Invalid input"

// ## FINAL MINI-CHALLENGE

// ### 🏁 Task 11: Simple Car Deal Summary

// Write a function that:

// 1. Takes:
//     - car brand
//     - car price
//     - user budget
// 2. Cleans the brand name
// 3. Rounds the price
// 4. Checks if the car is affordable
// 5. Returns a sentence using **template literals**

function carDealSummary(brand, price, budget) {
  brand = brand.trim();

  price = Math.round(price);

  if (price <= budget) {
    return "You can buy the " + brand + " for " + price + ".";
  } else {
    return "The " + brand + " costs " + price + " and is too expensive.";
  }
}

console.log(carDealSummary("  Honda ", 19999.5, 20000));
console.log(carDealSummary("Mercedes", 35000.8, 30000));
