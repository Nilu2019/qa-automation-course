//Number
//A number in JavaScript represents numeric values.

let a = 7;
let b = 2;
console.log(a / b); // 3.5

//Basic Number Operations

//These are the building blocks of numeric logic.

let c = 10;
let d = 5;

console.log(c + d); // 15  → addition
console.log(c - d); // 5   → subtraction
console.log(c * d); // 50  → multiplication
console.log(c / d); // 2   → division
console.log(c % d); // 0   → remainder (modulus)

// Comparing Numbers

//Comparisons return true or false.

let a1 = 10;
let b1 = 5;

console.log(a1 > b1); // true
console.log(a1 < b1); // false
console.log(a1 >= 10); // true
console.log(b1 <= 5); // true
console.log(a1 == b1); // false  (equal)
console.log(a1 != b1); // true   (not equal)

//Rounding Numbers

//Math.round() - Rounds to the nearest whole number.

let e = 3.2;
let f = 7.8;

console.log(Math.round(e)); // 3
console.log(Math.round(f)); // 8

//Rounding Numbers
//Math.floor() - Always rounds down
let h = 3.9;
let i = 7.2;

console.log(Math.floor(h)); // 3
console.log(Math.floor(i)); // 7

// Rounding Numbers
//Math.ceil() - Always rounds up.
let j = 3.1;
let k = 7.8;

console.log(Math.ceil(j)); // 4
console.log(Math.ceil(k)); // 8

//Rounding Numbers
//Math.trunc() - Removes the decimal part
let l = 3.9;
let m = 7.2;

console.log(Math.trunc(l)); // 3
console.log(Math.trunc(m)); // 7

//Formatting Numbers
//     .toFixed() - Formats a number to a fixed number of decimal places. ⚠ Returns a string, not a number.
let n = 3.14159;
let o = 7.456;

console.log(n.toFixed(2)); // "3.14"
console.log(o.toFixed(1)); // "7.5"

//Converting Numbers
//Number() - Converts a value into a number

let p = "42";
let q = "3.14";

console.log(Number(p)); // 42
console.log(Number(q)); // 3.14

//Converting Numbers
//parseInt() - Converts a value into an integer by removing decimals.

let p1 = "42.9";
let q1 = "3.14";

console.log(parseInt(p1)); // 42
console.log(parseInt(q1)); // 3

//Converting Numbers
//parseFloat() - Converts a value into a decimal number

let x = 7;
console.log(parseFloat(x)); // 7

//Checking Numbers
//.   isNaN() - Checks whether a value is Not a Number.

let e3 = "hello";
let f3 = 42;

console.log(isNaN(e3)); // true
console.log(isNaN(f3)); // false

//Checking Numbers
//.         Number.isInteger() - Checks whether a value is an integer.

let s = 7;
let t = 3.14;

console.log(Number.isInteger(s)); // true
console.log(Number.isInteger(t)); // false

// Math Utility Methods
//.     Math.abs() - Returns the absolute value of a number.

let u = -7;
let v = 3;

console.log(Math.abs(u)); // 7
console.log(Math.abs(v)); // 3

//Math Utility Methods
//     Math.min() - Returns the smallest value.

let w = 7;
let x1 = 3;

console.log(Math.min(w, x1)); // 3
console.log(Math.min(10, 5, 8, 2)); // 2

// Math Utility Methods
// Math.max() - Returns the largest value.
let w1 = 7;
let w2 = 3;

console.log(Math.max(w1, w2)); // 7
console.log(Math.max(10, 5, 8, 2)); // 10

// Math Utility Methods
//.      Math.pow() - Raises a number to a power

let e4 = 2;
let f4 = 3;

console.log(Math.pow(e4, f4));
console.log(Math.pow(f4, 2));

// Math Utility Methods
//.    Math.sqrt() - Returns the square root of a number
let x3 = 9;
let x4 = 16;

console.log(Math.sqrt(x3));
console.log(Math.sqrt(x4));

// Math Utility Methods
// Math.random() - Generates a random decimal number between 0 (inclusive) and 1 (exclusive).

let randomInt = Math.floor(Math.random() * 101 + 200);
console.log(randomInt);
