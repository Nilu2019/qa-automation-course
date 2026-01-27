// - An array of **car brands** (at least 5)
//- An array of **numbers**
//- A **string** with extra spaces
//- A **decimal number**

let carBrands = ["Mazda", "BMW", "Audi", "Lexus", "Mercedes"];
let numbers = [10, 5, 8, 3, 20];
let sentence = "   my car is very fast   ";
let decimalNum = 7.6;

//## PART 1: ARRAYS (Car Brands)
//### Task 1: Accessing & Properties
//Write code to:
//1. Log the **first car brand**
//2. Log the **last car brand** using a method
//3. Log how many car brands are in the array
//Explain each output using comments.

console.log(carBrands[0]);
// first element in the array

console.log(carBrands[carBrands.length - 1]);
// last element using length

console.log(carBrands.length);
// number of car brands

//### ask 2: Updating Elements

//1. Change the **second car brand**
//2. Change the **last car brand**
//3. Log the updated array

carBrands[1] = "Toyota";
carBrands[carBrands.length - 1] = "Honda";
console.log(carBrands);

//### Task 3: Mutator Methods
//1. Add a new car brand to the **end**
//2. Remove the **last** car brand
//3. Add a new car brand to the **beginning**
//4. Remove the **first** car brand
//5. Reverse the array
//6. Sort the array alphabetically
//Log the array **after each step**.

carBrands.push("Ford");
console.log(carBrands);

carBrands.pop();
console.log(carBrands);

carBrands.unshift("Kia");
console.log(carBrands);

carBrands.shift();
console.log(carBrands);

carBrands.reverse();
console.log(carBrands);

carBrands.sort();
console.log(carBrands);

//Task 4: Finder Methods
//1. Check if `"Toyota"` exists in the array
//2. Find the index of `"BMW"`
//3. Find the last index of a car brand that appears more than once
// Add comments explaining the results.

console.log(carBrands.includes("Toyota"));
// true if Toyota exists
console.log(carBrands.indexOf("BMW"));
// index of BMW
carBrands.push("BMW");
console.log(carBrands.lastIndexOf("BMW"));
// last index of BMW

//### Task 5: Joiners

//1. Convert the car brands array into a **single string**
//2. Check if the car brands variable is an array
//3. Convert the word `"ENGINE"` into an array of characters

console.log(carBrands.join(", "));
console.log(Array.isArray(carBrands));
console.log(Array.from("ENGINE"));

//## PART 2: STRING MANIPULATION
//### ✍ Task 6: Clean a String
//1. Remove extra spaces from the string
//2. Log the cleaned string
//3. Log its length

let mySentence = "   My car is very fast   ";
let trimmedSentence = mySentence.trim();
console.log(trimmedSentence);
console.log(trimmedSentence.length);

//### Task 7: Case & Access
//1. Convert the string to **uppercase**
//2. Convert it to **lowercase**
//3. Log the **first** character
//4. Log the **last** character

console.log(trimmedSentence.toUpperCase());
console.log(trimmedSentence.toLowerCase());
console.log(trimmedSentence[0]);
console.log(trimmedSentence.at(-1));

//### ✍ Task 8: Slice & Replace

//1. Extract the **first word**
//2. Extract the **last word**
//3. Replace one word with another

let words = trimmedSentence.split(" ");
console.log(words[0]);
console.log(words.at(-1));
console.log(trimmedSentence.replace("fast", "slow"));

//### Task 9: Search Methods
//1. Check if the string includes `"car"`
//2. Find the position of a word
//3. Check if the string starts with a specific word
//4. Check if the string ends with a specific word

console.log(trimmedSentence.includes("car"));
console.log(trimmedSentence.indexOf("car"));
console.log(trimmedSentence.startsWith("My"));
console.log(trimmedSentence.endsWith("fast"));

//### Task 10: Split & Concat
//1. Split the sentence into words
//2. Join two strings using a method (not `+`)

console.log(trimmedSentence.split(" "));
// ["My", "car", "is", "very", "fast"]
console.log("Hello".concat(" ", "Cars"));
// "Hello Cars"

//### Task 11: Template Literals

//Create variables for:
//- car brand
//- car year (has to be in the past)
//- car age (think about how you get the car age)
//Create a sentence using the variables and print the output

let carBrand = "Mazda";
let carYear = 2010;
let currentYear = 2025;
let carAge = currentYear - carYear;

console.log(`My car is a ${carBrand} and it is ${carAge} years old.`);

//## PART 3: NUMBERS

//### Task 12: Rounding

//1. Round a decimal normally
//2. Always round down
//3. Always round up
//4. Remove the decimal part

let myDecimal = 7.6;

console.log(Math.round(myDecimal)); // 8 -> normal rounding
console.log(Math.floor(myDecimal)); // 7 -> always rounds down
console.log(Math.ceil(myDecimal)); // 8 -> always rounds up
console.log(Math.trunc(myDecimal)); // 7 -> removes decimal part

//### Task 13: Formatting

//1. Format a number to **2 decimal places**
//2. Explain (in comments) why the result is **not a number**

let formattedNum = myDecimal.toFixed(2);
console.log(formattedNum);
// "7.60" -> note: this is a STRING, not a number

//### Task 14: Conversions
//1. Convert a numeric string into a number
//2. Convert a decimal string into an integer
//3. Convert a decimal string into a float

console.log(Number("42")); // 42 --> string to number
console.log(parseInt("7.9")); // 7 --> string to integer
console.log(parseFloat("7.9")); // 7.9 --> string to decimal

//### Task 15: Checking

//1. Check if a value is **Not a Number**
//2. Check if a number is an integer

console.log(isNaN("hello")); // true --> "hello" is not a number
console.log(Number.isInteger(10)); // true --> 10 is an integer

//### Task 16: Math Utilities

//1. Find the absolute value of a number
//2. Find the smallest number
//3. Find the largest number
//4. Raise a number to a power
//5. Find the square root of a number

console.log(Math.abs(-8)); // 8 --> absolute value
console.log(Math.min(10, 5, 8)); // 5 --> smallest value
console.log(Math.max(10, 5, 8)); // 10 --> largest value
console.log(Math.pow(2, 4)); // 16 --> 2 raised to power 4
console.log(Math.sqrt(25)); // 5 --> square root

//### Task 17: Random Numbers

//1. Generate a random number between 0 and 1
//2. Generate a random whole number between **1 and 10**
//3. Explain the formula in comments

console.log(Math.random());
// generates a random decimal between 0 (inclusive) and 1 (exclusive)

let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log(random1to10);
// formula explained:
// Math.random() -> 0–0.999...
// *10 -> 0–9.999...
// Math.floor -> 0–9
// +1 -> 1–10 (inclusive)

//## FINAL MINI CHALLENGE

//1. Takes a sentence about cars
//2. Cleans it (trim + case change)
//3. Splits it into words
//4. Prints the number of words using a template literal

let carPowerful = "   Cars are very fast and powerful   ";

let cleaned = carPowerful.trim().toLowerCase();

let wordsArray = cleaned.split(" ");

console.log(`This sentence has ${wordsArray.length} words.`);
