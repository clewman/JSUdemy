
/****************************
Variables and Data Types


var firstName = 'John';
console.log(firstName)

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);
*/

/************************
Variable mutation and type coercion


var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(lastName)
*/

/************************
basic operators


// Math operators
var year, yearJohn, yearMark, ageJohn, ageMark, ageJohn;
ageJohn = 28;
ageMark = 33;
now = 2018
yearJohn = now - 28;
yearMark = now - 33;

console.log(now + 2)

// logical operators

var JohnOlder = ageJohn > ageMark;
console.log(JohnOlder)

//typeof operator
console.log(typeof ageJohn);
*/

/******
operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average)

//multiple assignments
var x, y;
x = (3 + 5) * 4 -6;
*/

/***********************
CODING CHALLENGE 1

var JohnBMI, MarkBMI, MarkMass, JohnMass, MarkHeight, JohnHeight, isMarkBMIHigher;

MarkHeight = 1.9;
MarkMass = 90;
JohnHeight = 1.85;
JohnMass = 110;

JohnBMI = JohnMass / JohnHeight^2;
MarkBMI = MarkMass / MarkHeight^2;

isMarkBMIHigher = MarkBMI > JohnBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMIHigher)
*/

/*******************
if else statements


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married.');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
        console.log(firstName + ' is not married.');

}

var JohnBMI, MarkBMI, MarkMass, JohnMass, MarkHeight, JohnHeight, isMarkBMIHigher;

MarkHeight = 1.9;
MarkMass = 220;
JohnHeight = 1.85;
JohnMass = 110;

JohnBMI = JohnMass / JohnHeight^2;
MarkBMI = MarkMass / MarkHeight^2;

if (MarkBMI > JohnBMI) {
   console.log('Mark\'s BMI is higher than John\'s') 
} else {
       console.log('John\'s BMI is higher than Mark\'s') 

}

//isMarkBMIHigher = MarkBMI > JohnBMI;
//console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMIHigher)

*/


/****************
Boolean logic

var firstName = 'John';
var age = 4;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20 ) {
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');

}
*/
/***********************
the ternary operator and switch statements


// ternary operator
var firstName = 'John';
var age  = 22;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)

//if (age >= 18) {
//    var drink = 'beer';
//} else {
//    var drink = 'juice';
//}

//switch statemets
var job = 'instructor';
var age = 24;
switch (job) {
    case 'teacher': 
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives.');
        break;
    case 'designer':
        console.log(firstName + ' designs.');
        break;
    default:
        console.log(firstName + ' does something else.')
}


switch (true) {
    case age < 13:
        console.log(' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log( 'is a teen');
        break;
    case age>= 20 && age < 30:
        console.log('is a young man');
        break;
    default:
        console.log('is a man');
}

*/
/********************
truthy and falsey

//falsy values: undefined, null, 0, '', NaN
//truthey values: NOT falsy values

var height;

height = 0;

if (height || height === 0) {
    console.log('Variable is defined.')
} else {
    console.log('The variable has not been defined.')
}


// equality oeprators
height = 23;
if (height == '23') {
    console.log('the == operator does type coersion')
}
*/

/********************************
coding challenge 2

var JohnScores, MikeScores, JohnAvgScores, MikeAvgScores, MaryAvgScores,
    MaryScores, winner
JohnScores = 829 + 120 + 103;
MikeScores = 829 + 120 + 103;
MaryScores = 829 + 120 + 103;
JohnAvgScores = JohnScores / 3;
MikeAvgScores = MikeScores / 3;
MaryAvgScores = MaryScores / 3;
console.log(JohnAvgScores, MaryAvgScores, MikeAvgScores)

//if (JohnAvgScores > MikeAvgScores && JohnAvgScores > MaryAvgScores)
//    {
//        console.log('john wilns')
//    } else if (MikeAvgScores > JohnAvgScores && MikeAvgScores > MaryAvgScores)
//    {
//        console.log('mike wilns')
//    } else if (MaryAvgScores > MikeAvgScores && MaryAvgScores > JohnAvgScores)
//    {
//        console.log('john wilns')
//    } else {
//        console.log('tie')
//    }


switch (true) {
    case JohnAvgScores > MikeAvgScores && JohnAvgScores > MaryAvgScores:
        console.log('john wins');
        break;
    case MikeAvgScores > JohnAvgScores && MikeAvgScores > MaryAvgScores:
        console.log( 'mike win');
        break;
    case MaryAvgScores > JohnAvgScores && MaryAvgScores > MikeAvgScores:
        console.log('mary wins');
        break;
    default:
        console.log('is a tie');
}
*/

/*************************************************
functions


//function calculateAge(birthYear) {
//    return 2018- birthYear;
//}
//
//var ageJohn = calculateAge(1990)
//var ageMike = calculateAge(1984)
//var ageJane = calculateAge(1969)
//
//
//console.log(ageJohn, ageMike, ageJane)
//
//function yearsUntilRetirement(year, firstName) {
//    
//    var age = calculateAge(year);
//    var retirement = 65 - age;
//    console.log(firstName + ' retires in ' + retirement + ' years.')
//}
//
//yearsUntilRetirement(1990, 'John');

//function expression
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches code.';      
        case 'driver':
            return firstName + ' drives.';      
        case 'designer':
          return firstName + ' designs web.';      
        default: 
            return firstName + '  does something else.';      

    }
    
}
    console.log(whatDoYouDo('teacher', 'John'));
*/

/**********************************

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Mary'
console.log(names)

//different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();
console.log(john)

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer'
console.log(isDesigner)
arrays
*/
/********************************
coding challenge 3
*/
//
//function tipCalculator(bills) {
//    var percentage;
//    if (bills < 50) {
//        percentage = .2
//       
//    } else if (bills >= 50 && bills <= 200) {
//        percentage = .15
//        
//    } else {
//        percentage = .1     
//    }
//  return percentage * bills;
//}
//
//var bills = [124, 48, 268]
//var tip = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
//var finalValues = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]]
//console.log('The amount of tips is: $' + tip + '. The final bills are: $' + finalValues);


/*******************************
objects and properties


//object literal 
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
//using dot notation
console.log(john.firstName);

//using key name
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

//mutate data
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/
  
























