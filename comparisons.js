// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than number numberStudents?", numberStudents > numberTeachers);
// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is the numberTeachers stictly equal to stringTeachers?", numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers < numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", 20 >= numberStudents);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", 21 >= numberStudents);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// It is showing a true or false state for "four is less than nine". It will show on screen (true) as the answer.
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// It is showing a true or false conditional statement for "4 is less than books" (books=4). It will show as false.
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// It is showing two variables 1. "friends" with the value of 6 2. "siblings" with the value of 2 and is using the comparison operator "greater than" to compare the two variables. When noded it will show as true due to the variable of friends being greater than siblings.
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// It is showing tow variable 1. "attendees" with the value of 9 2. "meals" with the value of 8. It is checking with the comparison operator of "stictly not equal" that the variables are the same. If they were equal it would default to true, but due to them being unequal it will show as false.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats


// Determine if the dog loves to play and loves the dog park


// Determine if the dog loves to play or loves the dog park


// Determine if the dog loves to play and is a puppy

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: