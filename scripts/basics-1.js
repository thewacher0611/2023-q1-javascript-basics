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
 