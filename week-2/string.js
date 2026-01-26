// Strings

//1.     .length - The .length property tells you how many characters (including spaces) are in a string.

let city = "Dushanbe";
console.log(city.length);

//2. Accessing Characters
// You can access specific characters by their index (starting from 0).

let country = "Tajikistan";

// Access the first character

console.log(country[0]);

// Access the second character
console.log(country[1]);

// Access the third character
console.log(country[2]);

// 3. Changing Case

//        .toUpperCase & .toLowerCase() - These methods change the letter case of a string.

let fruit = "Cherry";

// Change all letters to uppercase
console.log(fruit.toUpperCase()); // CHERRY

// Change all letters to lowercase
console.log(fruit.toLowerCase()); // cherry

//4. Trimming Spaces

//      .trim() - This method removes extra spaces from the start and end of a string.

let userName = "   Matin  ";
console.log(userName.trim());

// 5. Slice (start, end)

//      .slice() - Extracts part of a string between two indexes (end is not included).

let book = "DadJoke";

// Extract the first three characters
console.log(book.slice(0, 3)); // Dad

// Extract from the 3rd character to the end
console.log(book.slice(3)); // Joke

let name1 = "Farkhunda";
console.log(name1.slice(0, 3));
console.log(name1.slice(3, 9));

//6. Replace (searchValue, newValue)

//     .replace() - Replaces the first match of searchValue with newValue.

let announcement = "Meeting at 10AM";

// Replace "10AM" with "2PM"
let updatedAnnouncement = announcement.replace("10AM", "2PM");

console.log(updatedAnnouncement); // Meeting at 2PM

//7. Includes (substring)

//        .includes() - Checks if a string contains a specific substring. -> Works with arrays also

let text = "I love programming";

// Check if the string includes "love"
console.log(text.includes("love")); // true

// Check if the string includes "Hate"
console.log(text.includes("Hate")); // false

//8. Split (separator)

//      .split() - Splits a string into an array using the separator you provide. -> For arrays itʼs the opposite and  .join() splits arrays into a single string.

let sentence = "QA automation is fun";

// Split the sentence into words using space as a separator
let words = sentence.split(" ");
console.log(words); // ["QA", "automation", "is", "fun"]

let fruitsArray = ["Apple", "Banana", "Cherry"];
let fruitString = fruitsArray.join(", ");
console.log(fruitString);

// 9. Concat (string1, string2, …)

//       .concat() - Joins two or more strings together

let str1 = "Hi";
let str2 = "Muhaymin";
console.log(str1.concat(" ", str2));

// 10.  indexOf (substring)

//        .indexOf() - Returns the position (index) of the first occurrence of a substring.

let text1 = "My kids are awesome";

console.log(text1.indexOf("kids"));
console.log(text1.indexOf("awesome"));

//11. startsWith() and endsWith()
//      .startsWith() & endsWith() - Checks whether a string starts or ends with a certain substring.

let text2 = "My kids are awesome";

console.log(text2.startsWith("My")); // true
console.log(text2.startsWith("kids")); // false

console.log(text2.endsWith("awesome")); // true
console.log(text2.endsWith("kids")); // false

// Template literals
//Template literals make working with strings simpler and cleaner.

let name3 = "Nilufar";
let text3 = `Hello, ${name3}!`;

console.log(text3); // Hello, Nilufar!

// 1.Multi-line Strings
//Create multi-line strings.

let text4 = `Hello
My kids are awesome
Have a nice day`;

console.log(text4);

//2. Expressions Inside Template Literals

//You can perform calculations or function calls directly inside ${}
let userName1 = "nilufar";
let message = `Name: ${userName1.toUpperCase()}`;

console.log(message); // Name: NILUFAR

// 3. Combining String Methods + Template Literals
//You can combine multiple techniques for dynamic, formatted strings:

let userName2 = " nilufar ";
let age = 38;

let message1 = `Name: ${userName2.trim().toUpperCase()}, Age: ${age + 1}`;

console.log(message1);
// Name: NILUFAR, Age: 39
