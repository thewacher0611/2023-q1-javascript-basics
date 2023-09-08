<<<<<<< HEAD
// every thing I type after the slashes will be a comment

/*
this
will
last
many
lines
*/

// pascal case: lowerCaseFirstLetter - variable names
// camal case: UpperCaseFirstLetter - class names
// kabob case: hyphen-between-words - file names and id's in HTML
// snake case: UPPER_CASE_UNDERSCORES_BETWEEN - contents

console.log("hello world");
//keywords for declaring variables

let favoritsong = 'never "gonna give you up';
let age = 52;
let myMoney = 50.84;




myMoney = "bankrupt";

console.log(favoritsong.length)






//generateAdvise(advisers, howOften, verbs, adjectives, nouns);



let classroom = {
    roomNumber: 129,
    seats:35,
    teacher: {
        firstName:"Robert",
        lastName:"Hardy"
    },

    students: [
    {firstName: "Cade", lastName: "Arney", grade:8},
    {firstName: "Lana", lastName: "Krakow", grade:8}
    ],
    LightsOn: true,
    turnLightsOff: function(){

    this.LightsOn = false;
    }
};

console.log(classroom);
 
=======
// any I that I type after the slashes will be a comment

/* 
multiline comment
this will
span
many lines
*/


// pascal case: lowerCaseFirstLetter - variable names
// camel case: UpperCaseFirstLetter - class names
// kabob case: hyphen-between-words - file names and id's in HTML
// snake case: UPPER_CASE_UNDERSCORES_BETWEEN - constants

//console.log("Hello world!");

// keywords for declaring variables

// strings
let favoriteSong = "Never gonna give you up";

// numbers
let age = 52;
let myMoney = -10000.45;

// boolean
let isGameOver = false;

// arrays
// a variable that holds a "list" of values

let fruits = ["apple", "grapes", "banana"];

console.log(fruits[2]);

myMoney = "bankrupt";

//console.log(favoriteSong.length);

// objects
// have properties and methods

let classRoom = {
    roomNumber: 129,
    seats: 35,
    teacher: {
        firstName: "Robert",
        lastName: "Hardy"
    },
    students: [
        { firstName: "Cade", lastName: "Arney", grade: 8 },
        { firstName: "Lana", lastName: "Krakow", grade: 8 },
    ],
    lightsOn: true,
    turnLightsOff: function() {
        this.lightsOn = false;
        return;
    }
};

console.log(classRoom);
classRoom.turnLightsOff();
console.log(classRoom);

let classRoom2 = {
    roomNumber: 131,
    seats: 40,
    teacher: {
        firstName: "Zach",
        lastName: "Deegan"
    },
    students: [
    ],
    lightsOn: true,
    turnLightsOff: function() {
        this.lightsOn = false;
        return;
    }
};
>>>>>>> 1e27e0a8cdb3e4c4dfcdb562953012ab60210272
