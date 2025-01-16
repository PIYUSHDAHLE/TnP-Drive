// 1. Basic Console Usage
// •	Print a message to the console.
console.log("hey");

// •	Log the result of a mathematical operation (2 + 2).
console.log(2+2);

// •	Log a variable’s value and track changes using console.log().
// let a = 20; //decleration and init
//.....
//......
console.log(a);
//......
a =Math.random();//update
console.log(a);

// 2. Variables and Data Types
// •	Declare a variable using let and const.
let b1 = 12;
const b2 = 12;

// •	Assign and reassign a value to a variable.
var data = 'dahle'//assign
data = 'piyush'//reassign

// •	Determine the type of a variable using typeof.
typeof 12
typeof 'don'

// 3. Loops

// range to range
// Total occurance
// we don't know shit

// •	Create a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
    }

// •	Create a while loop to count down from 10 to 1.
let j = 10;
while (j >= 1) {
    console.log(j);
j--;
}

// •	Use a for...of loop to iterate over an array of names.
let naam = ['piyush', 'ram','sakshi','swati','sachin'];
for(var k = 0; k = naam.length; k++){
    console.log(naam[k]);    
}


//compiled lang -> Compiler -> machine code
//used in C++,C,Java,etc
//interpreted lang -> Interpreter -> byte code -> machine code
//used in js
// jit compiler

// Extra : confirm(), prompt(), alert() 