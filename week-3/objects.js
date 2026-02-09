// 1. Looping over object always used [].
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  bye() {
    console.log(`I am ${this.name}, bye`);
  },
};
for (const key in person) {
  console.log(key + ": " + person[key]);
}
// 2. "in" keyword// checking if a key exist

console.log("name" in person);
console.log("weitgh");

// 3.  Accessing object properties (keys)

console.log(person.name);
console.log(person.age);

// 4. Adding and updating. properties
console.log(person);
// Adding - if a key does not exist then it add. it to the object
person.heigh = 170;
console.log(person);

// Updating - if a key exists, then it update the value of. specifiec key inside the object
person.age = 30;
console.log(person);

// 5. "delete" keybord - Removing properties

delete person.heigh;
console.log(person);

//6. Object method

person.greet();
person.bye();

// 7. Using "this" keyword
const car = {
  brand: "Tesla",
  speed: 120,
  info() {
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  },
};
car.brand;
car.speed;

car.info();

// Build in Object methods Object.keys, Object.values, Object.enteries

const soccerPlayer = {
  name: "Ronaldo",
  age: 41,
  country: "Portugal",
};

const keys = Object.keys(soccerPlayer);
console.log(Object.keys(soccerPlayer));

//console.log();

console.log(Object.values(soccerPlayer));
console.log(keys.includes("age"));
