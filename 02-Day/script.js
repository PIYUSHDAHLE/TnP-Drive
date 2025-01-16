// 4. Arrays
// 	•	Create an array with 5 elements and log it.
let arr = ['Hello','hi','hey','namste']
console.log(arr);

// 	•	Add a new element to the end of an array (.push()).
arr.push('Ram Ram Ji');
console.log(arr);

// 	•	Remove the last element from an array (.pop()).
arr.pop();
console.log(arr);
// 	•	Add a new element to the start of an array (.unshift()).
arr.unshift('hui-hui');
console.log(arr);

// 	•	Remove the first element from an array (.shift()).
arr.shift();
console.log(arr);

// 	•	take the part of from array using (.splice()).
arr.splice(1,2);
console.log(arr);

// 	•	Iterate over an array and print each element.
let wow = [1,2,3,4,5,6]
for (let i = 0; i < wow.length; i++) {
    console.log(wow[i]);
}
// 	•	Find the length of an array.
console.log(`length of wow array : ${wow.length}`);

// 5. Functions
// 	•	Create a function to add two numbers and return the result.
function add(a,b){
    return a+b;
    }
    console.log(add(5,7)); // 12
   
 // 	•	Create a function to greet a person by name.
    function greet(name){
        console.log(`Hello ${name}!`);
        }
        greet('Piyush'); // Hello Piyush!
        
// 	•	Write a function that accepts a string and returns its uppercase version.
let name= 'piyush dahle'
function toUppercase(str){
    return str.toUpperCase();
    }
    console.log(toUppercase(name)); // PIYUSH DAHLE




// 	•	Create a function to calculate the area of a rectangle.
function rectangleArea(length, width) {
    return length * width;
}
console.log(rectangleArea(5, 10)); // 50

// 6. Conditionals
// 	•	Write an if statement to check if a number is positive or negative.
let num = 5;
if (num > 0) {
    console.log(num + " is a positive number");
    } else {
        console.log(num + " is a negative number");
        }

// 	•	Use if...else if to classify a grade as “A”, “B”, or “Fail”.
let marks = 25;
if (marks >= 80) {
    console.log("Grade: A");
    } else if (marks >= 40) {
        console.log("Grade: B");
        } else {
            console.log("Grade: Fail");
            }

// 	•	Create a switch case for selecting a fruit price.

let fruit = 'apple';
switch (fruit) {
    case 'apple':
        console.log('The price of apple is 100');
        break;
        case 'banana':
            console.log('The price of banana is 80');
            break;
            case 'orange':
                console.log('The price of orange is 90');
                break;
                default:
                    console.log('Fruit not found');
                    break;
                    }
                

