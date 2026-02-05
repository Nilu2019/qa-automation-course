// I am writing the same code over and over and repeating myself

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// let i = 1;

// i++; // -> 1 + 1 = 2
// i++; // -> 2 + 1 = 3
// i++; // -> 3 + 1 = 4
// i++; // -> 4 + 1 = 5

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

const fruit = ["apple", "banana", "orange"];
for (let index = 0; index < fruit.length; index++) {
  console.log(`Fruit at index ${index}:`, fruit[index]);
}
