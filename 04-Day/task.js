//  1.⁠ ⁠Basic Console Usage
// 	1.	Write a program that calculates the sum of 5 + 10, assigns it to a variable, and logs the result to the console.
//Answer :
let n1=5,n2=10;
console.log(n1+n2);

// 2.⁠ ⁠Variables and Data Types
// 	2.	Declare a variable age with the value 25. Then, reassign it to 30 and log its type using typeof.

//Answer :
let age=25;
age=30;
console.log(typeof age); 

// 3.⁠ ⁠Loops
// 	3.	Write a for loop that prints all the odd numbers between 1 and 20.

//Answer :
for (let i = 1; i < 21; i++) {
    console.log(i);
}

// 	4.	Create a while loop that starts at 10 and decreases by 2 until it reaches 0. Log each step.

//Answer :
let n=10;
while(n>=0){
    console.log(n);
    n=n-2;
}

// 4.⁠ ⁠Arrays
// 	5.	Create an array of your favorite fruits (at least 5).
// 	•	Add a new fruit to the end of the array.
// 	•	Remove the first fruit from the array.
// 	•	Log the updated array.

//Answer :
let arr = ['banana','mango','apple','graps']
arr.push('orange');
arr.shift();
console.log(arr);

// 	6.	Write a program that iterates over an array of numbers and prints only the numbers greater than 10.

//Answer :
let nn = [123,4545,678,78,3,33,54,3,2,5,89,3,6,5]
for(let i=0; i<nn.length ;i++)
{
    if (nn[i]>10) {console.log(nn[i]);}
}

// 5.⁠ ⁠Functions
// 	7.	Write a function multiplyNumbers that takes two numbers as arguments and returns their product. Test the function with values 5 and 6.

//Answer :
let fun = (p,q)=>{
 return p*q;
}
let a=5,b=6;
console.log(`Product of ${b} and ${a} is ${fun(a,b)}`);


// 6.⁠ ⁠Conditionals
// 	8.	Write an if...else statement to check if a number is divisible by 3. If it is, log “Divisible by 3,” otherwise log “Not divisible by 3.”

//Answer :
let number = 33;
if (number%3 === 0) {
    console.log('Divisible by 3');
} else {
    console.log('Not divisible by 3');
}

// 7.⁠ ⁠Object Basics
// 	9.	Create an object book with properties: title, author, and year. Add a new property genre with the value fiction and log the updated object.

//Answer :
const book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 1997,
}
book.genre= 'fiction'
console.log(book);

// 8.⁠ ⁠String Manipulation
// 	10.	Write a program that takes a string JavaScript is fun! and:
// 	•	Converts it to all uppercase.
// 	•	Extracts the first 10 characters.
// 	•	Replaces the word fun with awesome.

//Answer :
let str = 'JavaScript is fun!'
str = str.toUpperCase();
console.log(str.slice(0,10));
str = str.replace('FUN','AWESOME')
console.log(str);



