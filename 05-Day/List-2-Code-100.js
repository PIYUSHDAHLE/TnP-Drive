// // 1. Intermediate Console and Variables (10 Questions)

// // 	1.	Create a program that calculates and logs the result of (5 + 3) * 2 - 8 / 4.
// console.log((5+3)*2-8/4);

// // 	2.	Log the value of a variable before and after incrementing it using ++.
// let v = 10;
// console.log(`before ${v}`);
// console.log(`After ${v++}`);//post increment
// console.log(`${v}`);
// console.log(`then ${++v}`);//pre increment

// // 	3.	Write a program that swaps the values of two variables without using a third variable.
// function swaps(v1,v2) {
// v1 = v1 + v2;
// v2 = v1 - v2;
// v1 = v1 - v2;
// return `value of v1 is ${v1} and v2 is ${v2}`
// }
// console.log(swaps(10,20));


// // 	4.	Create a variable with a template literal that includes your name and age.
// let name = 'Piyush Dahle'
// let age = 25;
// console.log(`My name is ${name} and I am ${age} years old`);


// // 	5.	Use console.table() to display the following object: { name: "John", age: 30, city: "New York" }.
// const obj = { name: "John", age: 30, city: "New York" };
// console.table(obj);

// // 	6.	Create a program that uses console.group() to group related logs.
// console.log("Starting Program");

// console.group("User Information");
// console.log("Name: Piyush Dahle");
// console.log("Age: 25");
// console.log("Location: Balaghat, M.P., India");
// console.groupEnd();

// console.group("Skills");
// console.log("Frontend: HTML, CSS, JavaScript, React.js");
// console.log("Backend: Node.js, Express.js");
// console.log("Other: MongoDB, GSAP, Figma, Git");
// console.groupEnd();

// console.log("Program Completed");




// // 	7.	Use console.time() and console.timeEnd() to measure the execution time of a simple loop.
// console.time();
// for (let i = 0; i < 1000; i++) {
//     console.log(`count ${i}`);
// }
// console.timeEnd();
// console.time();
// console.log('helllo');
// console.timeEnd();



// // 	8.	Log a variable’s value dynamically by including it in a string: "The value is: <value>".
// let value = 12;
// console.log(`value is : ${value}`);


// // 	9.	Use console.trace() to debug a function call stack.
// function first() {
//     second();
// }
// function second() {
//     third();
// }

// function third() {
//     console.trace(`Debuging function call stack`);
// }

// first()


// // 	10.	Create and log an object dynamically using computed property names.
// let k1 = 'naam';
// let k2 = 'city';
// let k3 = 'age';

// let val1 = 'Ram Chandra';
// let val2 = 'Hydrabad';
// let val3 = 35;

// const objs = {
//     [k1] : val1,
//     [k2] : val2,
//     [k3] : val3
// } 
// console.log(objs);


// // 2. Advanced Loops (10 Questions)
// // 	11.	Write a nested loop to generate a multiplication table (1 to 10).
// function tableOf(n) {
//     for (let i = 1; i <=n ; i++) {
//         for (let k = 1; k <= 10; k++) {
            
//             console.log(`${k} * ${i} = ${k*i}`);
//         }
//         console.log('.............');
//     }
// }
// tableOf(15);

// // 	12.	Use a for...in loop to iterate through the properties of an object.
// const info = {
//     name : 'Piyush Dahle',
//     age : 24,
//     email : 'patakaro@gmail.com'
// }
// for (const key in info) {
//     console.log(key);
// }

// // 	13.	Write a program to calculate the sum of all even numbers between 1 and 100 using a for loop.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i%2===0) {
//         sum = sum + i;
//     } else {
//         continue;
//     }
// }
// console.log(sum);

// // 	14.	Use a for...of loop to iterate over a string and count the vowels.
// let strs = 'PIYUSH DAHLE'
// function countVowel(s) {
//     let count= 0;
//     for (const elem of s) {
//        if (elem === 'a' || elem === 'e' || elem === 'i'|| elem === 'o' || elem === 'u'){
//         console.log(elem);
//         count++;
//        }
//     }
//     return count;
// }
// console.log(countVowel(strs.toLowerCase()));


// // 	15.	Create a loop that breaks out when a specific condition is met (e.g., number divisible by 7).
// for (let i = 0; i < Infinity; i++) {
//     if (i%7===0) {
//         console.log(`number is divisible by 7`);
//         break;
//     } else {
//         console.log(i);        
//     }
// }

// // 	16.	Write a loop that skips numbers divisible by 3 but logs all others up to 20.
// let newData = []
// for (let i = 1; i <=20; i++) {
//     if (i%3===0) {
//         continue;
//     } else {
//         newData.push(i);
//     }
// }
// console.log(newData);


// // 	17.	Use a do...while loop to prompt the user until they enter a positive number.
// let k = 0;

// do {
//     let data = prompt('Enter the number')
//     if (data === null) {
//         console.log(`Don't cancel plzz input the number`);
//         // break;
//     } else if (isNaN(data)) {
//         console.log('plzz enter the number only');
//         // break;
//     }else if(data.trim() === ''){
//         console.log('ENTER SOMETHING');
//         // break;
//     }
//     else{
//         let newData = Number(data)
//         if (newData > 0 ) {
//             console.log(`number is positive`);
//             break;
//         }else if(newData < 0){
//             console.log(`number is negitive`);
//             break;
//         }else{
//             console.log(`the number is zero`);
//             break;
//             }
//     }
//     k++;
// } while (k<Infinity);


// 	18.	Write a nested loop to generate a pyramid pattern:

//    *
//   ***
//  *****
// *******
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row= '', space = '', star= '';    
//     for(let h = 1; h <= n; h++) {
//        space = ` `.repeat(n-i)
//     }
//     for (let j = n; j > 1; j--) {
//        star = '* '.repeat(i)
//     }
//     row=space+star;
//     console.log(row);
    
// }
    
    

// 	19.	Use a loop to reverse a string "JavaScript".
// let str = 'JavaScript'
// let reverse = '';
// for (let i = str.length - 1; i >= 0 ; i--) {
//     reverse += str[i];
// }
// console.log(reverse);


// 	20.	Write a program to calculate the product of all numbers in an array using a loop.
// let arr = [1, 2, 3, 4, 5, 6];
// let pro = 1;
// for (let i = 0; i < arr.length; i++) {
//      pro *= arr[i];
// }
// console.log(pro);


// 3. Arrays and Objects (10 Questions)
// 	21.	Write a program to merge two arrays and remove duplicate values.
// let a1 = [1,2,2,3,4]
// let a2 = [3,4,5,5,5,6]
// let a3 = [...a1,...a2];

// let finalArr = [...new Set(a3)];
// console.log(finalArr);

// 	22.	Create a program to find the second largest number in an array.
// let arr = [12,33,44,11,88,44,11,22,34,99,56,1]
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// let secMax = Math.max(...arr.filter( arr => arr !== max));
// console.log(max);
// console.log(min);
// console.log(secMax);

// let arr = [12, 33, 44, 11, 88, 44, 11, 22, 34, 99, 56, 1];
// let n = 4; // Replace this with the desired nth value
// let max = null;
// for (let i = 0; i < n; i++) {
//     max = Math.max(...arr.filter(num => num < max || max === null));
// }
// console.log(`${n}th Maximum Number: ${max}`);


// 	23.	Write a function that removes all falsy values from an array.
// let arr = [123,true,'welcome',false,null,33,0,undefined]
// function truelyValue() {
//     return arr.filter(Boolean);
// }
// console.log(truelyValue(arr));

// 	24.	Use .reduce() to find the total sum of numbers in an array.
let arr = [10,20,30,40]
let sum = arr.reduce((a,b) => a+b,0);
console.log(sum);
// 	25.	Write a program that rotates an array to the left by n positions.
// 	26.	Use .find() to locate the first even number in an array.
// 	27.	Create a function that flattens a nested array (e.g., [1, [2, [3]]] → [1, 2, 3]).
// 	28.	Write a program that counts how many times each element appears in an array.
// 	29.	Use .some() and .every() to check conditions on an array.
// 	30.	Sort an array of objects by a specific property.

// 4. Functions and Closures (10 Questions)
// 	31.	Write a function that returns another function to calculate the power of a number.
// 	32.	Create a recursive function to calculate the Fibonacci sequence up to n terms.
// 	33.	Write a function that uses closures to create a counter.
// 	34.	Create a function that memoizes the result of a computation.
// 	35.	Write a function to debounce a button click event.
// 	36.	Implement a function that throttles an API call.
// 	37.	Create a higher-order function that applies a callback to each element of an array.
// 	38.	Write a function that calculates the GCD (Greatest Common Divisor) of two numbers.
// 	39.	Create a function that accepts an array of functions and executes them sequentially.
// 	40.	Write a function to curry a simple mathematical operation.

// 5. Strings and Regular Expressions (10 Questions)
// 	41.	Write a program to reverse the words in a sentence but not the sentence itself.
// 	42.	Use a regex to validate if a string is a valid email address.
// 	43.	Create a function to check if a string contains only digits.
// 	44.	Write a function to extract all numbers from a string and return them as an array.
// 	45.	Use .match() to find all occurrences of a word in a string.
// 	46.	Create a program to capitalize the first letter of each word in a string.
// 	47.	Write a function that removes duplicate characters from a string.
// 	48.	Use a regex to replace multiple spaces with a single space.
// 	49.	Write a function to check if a string is an anagram of another string.
// 	50.	Create a function to count the frequency of each word in a string.

// 6. Intermediate DOM Manipulation (10 Questions)
// 	51.	Write a script to dynamically create 10 buttons on a webpage.
// 	52.	Add an event listener to a button that logs its id when clicked.
// 	53.	Write a program to change the background color of a <div> on hover.
// 	54.	Dynamically add a CSS class to an element when a button is clicked.
// 	55.	Create a function to toggle the visibility of an element.
// 	56.	Write a program to count the number of <p> tags on a page.
// 	57.	Implement a function to disable all input fields on a form.
// 	58.	Write a program to clone an element and append it to the DOM.
// 	59.	Add a click event to a list of items and display the clicked item’s text.
// 	60.	Create a program to validate a form using JavaScript.

// 7. Intermediate Algorithms (10 Questions)
// 	61.	Write a function to merge two sorted arrays into one sorted array.
// 	62.	Implement a binary search algorithm.
// 	63.	Write a function to check if two strings are one edit away.
// 	64.	Create a function that finds the longest common prefix in an array of strings.
// 	65.	Write a program to check if a string can be rearranged into a palindrome.
// 	66.	Create a function to find the intersection of two arrays.
// 	67.	Implement the Sieve of Eratosthenes to find prime numbers up to n.
// 	68.	Write a program to generate all subsets of a given array.
// 	69.	Create a function to calculate the power of a number iteratively.
// 	70.	Implement a function to sort an array using the quicksort algorithm.

// 8. Advanced Error Handling (10 Questions)
// 	71.	Write a program to handle a division by zero error.
// 	72.	Use try...catch to log an error message for invalid JSON parsing.
// 	73.	Write a function to validate user input and throw a custom error if invalid.
// 	74.	Create a program to handle a failed promise using .catch().
// 	75.	Use finally to log a cleanup message after a promise resolves or rejects.
// 	76.	Implement a function to retry a failed API call up to 3 times.
// 	77.	Write a function that uses try...catch inside an async function.
// 	78.	Create a program to handle and log syntax errors dynamically.
// 	79.	Write a function to ensure a variable is defined before using it.
// 	80.	Use error handling to check if a file exists before reading it.

// 9. Advanced Array and Object Manipulation (10 Questions)
// 	81.	Write a function that groups an array of objects by a specific property.
// 	82.	Use .map() to transform an array of objects into a new format.
// 	83.	Write a program to deep clone an object without using external libraries.
// 	84.	Create a function that merges multiple arrays into a single unique array.
// 	85.	Write a function to count the occurrences of properties in an array of objects.
// 	86.	Implement a function to sort an array of objects by multiple properties.
// 	87.	Write a function to create a nested object from a flat array of key-value pairs.
// 	88.	Use .reduce() to transform an array into an object with grouped values.
// 	89.	Create a function to find the difference between two arrays of objects.
// 	90.	Write a function to filter and transform an array of objects in a single step.

// 10. Real-World Use Cases (10 Questions)
// 	91.	Create a simple program that fetches and displays user data from a mock API.
// 	92.	Write a program to simulate a shopping cart with add, remove, and total cost features.
// 	93.	Implement a simple pagination system for an array of data.
// 	94.	Write a program to dynamically update a chart using JavaScript.
// 	95.	Create a program to search for and highlight specific text on a webpage.
// 	96.	Write a program to simulate a basic stopwatch with start, stop, and reset functionality.
// 	97.	Implement a function to validate password strength based on rules.
// 	98.	Create a simple image slider with next/previous buttons.
// 	99.	Write a program to sort and display data fetched from an API.
// 	100.	Create a program that automatically saves form data to localStorage.

// Let me know if you’d like to explore solutions or get hints for any of these!