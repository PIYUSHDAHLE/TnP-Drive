// 1. Basic Console Usage
// 	•	Print a message to the console.
console.log("Hello");

// 	•	Log the result of a mathematical operation (2 + 2).
console.log(2 + 2);

// 	•	Log a variable’s value and track changes using console.log().
let wow=2;
console.log(wow);
// ...
// ...
wow = Math.random();
// ...
// ...
console.log(wow);
// ...

// 2. Variables and Data Types
// 	•	Declare a variable using let and const.
let name = "John";
const age = 55;
// 	•	Assign and reassign a value to a variable.
let data = "Bahut important data"//assign
data = "something is different in the data"//reassign

// 	•	Determine the type of a variable using typeof.
let q= 55,w='kaise ho',e=true,r=BigInt(34343);
console.log(typeof q); // number
console.log(typeof w); // string
console.log(typeof e); // boolean
console.log(typeof r); // bigint


// 3. Loops
// 	•	Create a for loop to print numbers from 1 to 10.
for(let i=1;i>11;i++){
console.log(i);
}

// 	•	Create a while loop to count down from 10 to 1.
let count =10;
while (count>=1) {
    console.log(count);
    count--;
}

	// •	Use a for...of loop to iterate over an array of names.
arr= ['Hello',"Jai Shree Ram",425,56,'hmmm']
for(let datas of arr){
    console.log(datas);
}


// 4. Arrays
// 	•	Create an array with 5 elements and log it.
let arr=[234,234234,,2345,67,667,845,34363,'ffv',23234,'evdfv',23,23] 
// 	•	Add a new element to the end of an array (.push()).
arr.push(8888)
console.log(arr);

// 	•	Remove the last element from an array (.pop()).
arr.pop()
console.log(arr);

// 	•	Iterate over an array and print each element.
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}

// 	•	Find the length of an array.
console.log(arr.length);

// 5. Functions
// 	•	Create a function to add two numbers and return the result.
const fun =(a,b)=>{
return (a+b);
}
console.log(fun(5,6));

// 	•	Write a function that accepts a string and returns its uppercase version.
const chacha = ()=>{
    return 'Hello kaise ho aap sub'.toUpperCase();
}
console.log(chacha());


// 	•	Create a function to calculate the area of a rectangle.
let area = (l,b)=>{
        return l*b;
}
console.log(area(33,77));


// 6. Conditionals
	// •	Write an if statement to check if a number is positive or negative.
let num =  prompt("Enter the number")
if(num===null||num.trim()===''){
    console.log('Please Must enter a number');
}else{
    if (isNaN(num)) {
        console.log('Your input is not a number');
    } else {
        let newNum = Number(num)
        if (newNum>=0) {
            console.log('number is posititve');
        } else {
            console.log('number is negitive');
        }
    }
}
// 	•	Use if...else if to classify a grade as “A”, “B”, or “Fail”.
let s1 = prompt("Enter the English")
let s2 = prompt("Enter the Maths")
let s3 = prompt("Enter the Science")

if(s1===null||s2===null||s3===null && s1.trim()===''||s2.trim()===''||s3.trim()===''){
console.log('Plzz enter the marks');
}else if (isNaN(s1)||isNaN(s2)||isNaN(s3)) {
    console.log('your input is not a number'); 
} else {
    let m1=Number(s1);
    let m2=Number(s2);
    let m3=Number(s3);
    let per =(m1+m2+m3)/3;
    if (per>=80) {
console.log('your grade is A');
} else if(per>=60&&per<80){
        console.log('your grade is B');
    }if (per>=40&&per<60) {
        console.log('your grade is C');
        
    } else if(per<40 ){
        console.log('Q nahi ho rahi padhai maa chudaoo');
    }
}

// 7. Object Basics
// 	•	Create an object to store information about a car (e.g., make, model, year).
const obj = {
    model:'cutie',
    brand:'lovely',
    year:2020
}
console.log(obj);

// 	•	Access and log the value of a property using dot notation.
console.log(obj.model);
// 	•	Add a new property to an existing object.
obj.color='red'
console.log(obj);