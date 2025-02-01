// 10 Questions on .map()

// 	1.	Given an array of numbers, use .map() to return a new array where each number is multiplied by 3.

// const numbers = [2, 4, 6, 8];
// Expected output: [6, 12, 18, 24]

// let newNum = numbers.map(n => n* 3);
// console.log(newNum);


// 	2.	Given an array of strings, use .map() to return a new array where each string is converted to uppercase.

// const words = ["hello", "world", "javascript"];
// // Expected output: ["HELLO", "WORLD", "JAVASCRIPT"]
// newWrods = words.map( w => w.toUpperCase());
// console.log(newWrods);


// 	3.	Given an array of numbers, return an array where each number is replaced by its square.

// const numbers = [1, 2, 3, 4];
// // Expected output: [1, 4, 9, 16]
// let arr = numbers.map(n => n*n )
// console.log(arr);


// 	4.	Given an array of names, use .map() to add the prefix “Mr. “ to each name.

// const names = ["John", "Mike", "Sam"];
// // Expected output: ["Mr. John", "Mr. Mike", "Mr. Sam"]
// let arr = names.map( n => "Mr. "+n );
// console.log(arr);

// 	5.	Given an array of objects representing students with name and marks, return an array with only their marks increased by 5.
// const std = [
//     { name:"Piyush Dahle", marks:75 },
//     { name:"jone Snow", marks:66 },
//     { name:"Ujjwal Paul", marks:77 },
//     { name:"Sakshi Dahle", marks:85 }
// ]
// mark = std.map(obj => obj.marks+5);
// console.log(mark);

// // Expected output: [ 80, 71, 82, 90 ]


// 	6.	Given an array of numbers, use .map() to convert them into strings.

// const numbers = [1, 2, 3, 4];
// // Expected output: ["1", "2", "3", "4"]
// let arr = numbers.map( n => n.toString());
// console.log(arr);


// 	7.	Given an array of product objects with name and price, return an array where prices are increased by 10%.

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 }
// ];
// Expected output: [{ name: "Laptop", price: 1100 }, { name: "Phone", price: 550 }]

// let updateObj = products.map(obj => ({ ...obj , price : obj.price * (1+10/100)}) );
// console.log(updateObj);


// 	8.	Given an array of numbers, use .map() to return an array of boolean values where true represents even numbers and false represents odd numbers.
// const numbers = [1, 2, 3, 4, 5];
// // Expected output: [false, true, false, true, false]
// let arr = numbers.map( n => n%2===0? true : false )
// console.log(arr);


// 	9.	Given an array of words, return a new array where each word’s first letter is capitalized.

// const words = ["apple", "banana", "cherry"];
// // Expected output: ["Apple", "Banana", "Cherry"]
// let arr = words.map( w => w.charAt(0).toLocaleUpperCase() + w.slice(1));
// console.log(arr);



// 	10.	Given an array of temperatures in Celsius, use .map() to convert them into Fahrenheit.

// const celsiusTemps = [0, 20, 30, 40];
// // Expected output: [32, 68, 86, 104]
// let arr = celsiusTemps.map( c => c*(9/5)+32);
// console.log(arr);

// 10 Questions on .filter()

// 	1.	Given an array of numbers, use .filter() to return a new array containing only numbers greater than 10.

// const numbers = [5, 10, 15, 20, 25];
// // Expected output: [15, 20, 25]
// let arr = numbers.filter(n => n>10);
// console.log(arr);

// 	2.	Given an array of words, use .filter() to return only the words with more than 4 letters.

// const words = ["car", "bicycle", "bus", "train"];
// // Expected output: ["bicycle", "train"]
// let arr = words.filter( w => w.length > 4 )
// console.log(arr);

// 	3.	Given an array of objects representing people with name and age, return an array of people who are 18 or older.

// const people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 15 },
//   { name: "Piyush", age: 25 },
// ];
// // // Expected output: [ { name: 'Bob', age: 20 }, { name: 'Piyush', age: 25 } ]
// let arr = people.filter( e => e.age > 18 )
// console.log(arr);


// 	4.	Given an array of numbers, filter out all the odd numbers.

// const numbers = [1, 2, 3, 4, 5, 6];
// // Expected output: [2, 4, 6]
// let arr =  numbers.filter(e => e%2 === 0 )
// console.log(arr);

// 	5.	Given an array of product objects with name and price, return only the products that cost less than 50.

// const products = [
//   { name: "Notebook", price: 30 },
//   { name: "Bag", price: 100 },
//   { name: "Pen", price: 10 }
// ];
// // // Expected output: [{ name: "Notebook", price: 30 }, { name: "Pen", price: 10 }]

// let arr =  products.filter( e => e.price < 50 );
// console.log(arr);


// 	6.	Given an array of emails, filter out those that do not contain “@”.

// const emails = ["john.doe@gmail.com", "invalid.email.com", "hello@world.com"];
// // Expected output: ["john.doe@gmail.com", "hello@world.com"]

// let arr = emails.filter( e => e.includes('@') ) 
// console.log(arr);

// 	7.	Given an array of numbers, filter out only the prime numbers.

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Function to check if a number is prime
// function isPrime(n) {
//     if (n < 2) return false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false; 
//     }
//     return true;
// }

// const primeNumbers = numbers.filter( e => isPrime(e));

// console.log(primeNumbers);


// 	8.	Given an array of students with name and marks, return an array of students who scored more than 75.

// const students = [
//   { name: "Alice", marks: 80 },
//   { name: "Bob", marks: 70 },
//   { name: "Charlie", marks: 90 }
// ];
// // // Expected output: [{ name: "Alice", marks: 80 }, { name: "Charlie", marks: 90 }]

// let arr = students.filter(e => e.marks > 75);
// console.log(arr);


// 	9.	Given an array of mixed data types, use .filter() to return only the strings.

// const mixedArray = [1, "hello", true, "world", 42, "JavaScript"];
// // Expected output: ["hello", "world", "JavaScript"]

// let arr = mixedArray.filter(e => typeof e === 'string')
// console.log(arr);


// 	10.	Given an array of objects representing tasks with title and completed (boolean), return only the completed tasks.

// const tasks = [
//   { title: "Learn JavaScript", completed: true },
//   { title: "Learn Python", completed: false },
//   { title: "Learn React", completed: true }
// ];
// // Expected output: [{ title: "Learn JavaScript", completed: true }, { title: "Learn React", completed: true }]

// let arr = tasks.filter( e => e.completed == true )
// console.log(arr);
