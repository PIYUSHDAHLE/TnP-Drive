// 1. Basic Console Usage (10 Questions)
// 	1.	Log your name and favorite hobby to the console.
//Answer : 
let name = 'Piyush Dahle'
let hobby = 'Coding and Dancing'
console.log(`Hello everyone my is ${name} and my Hobbies are ${hobby}`);


// 	2.	Perform and log the result of 45 * 2 - 10.
//Answer : 
console.log(45*2-10);

// 	3.	Use console.log() to display the current year.
//Answer : 
let date = new Date();
console.log(date.getFullYear());

// 	4.	Create two variables for first and last name. Concatenate and log them.
let firstName = 'Piyush'
let lastName = 'Dahle'
console.log(`${firstName} ${lastName}`);    

// 	5.	Track the value of a variable by logging it before and after updating.
let nice = 'q bolo bhai nice'
//...
//...
console.log(nice);
//...
nice = 'bas acha laga is liye'
//...
//...
console.log(nice);


// 	6.	Use console.error() to simulate an error message.
console.error('Error: Something went wrong!');

// 	7.	Log the square of the number 12 to the console.
console.log(12*12);

// 	8.	Print the type of a variable holding the value true.
console.log(typeof true);

// 	9.	Create a variable holding your age and log whether it’s greater than 18.
let age = 45;
if (age >= 18) {
    console.log("The number is greater or equal to 18");
} else {
    console.log("The number is less than 18");    
}

// 	10.	Log the result of 100 / 0 and observe the output.
console.log(100/0);//Infinity

// 2. Variables and Data Types (10 Questions)
// 	11.	Declare a variable using let and log its value.
let v1 = 10;
const v2 =50; 

// 	12.	Create a constant to store the value of PI and log it.
const PI = 3.14;
console.log(PI);

// 	13.	Reassign a value to a variable declared with let and log the result.
v1=5000;
console.log(v1);

// 	14.	Check the type of null and log it.
console.log(typeof null);//object

// 	15.	Create a variable with a number as a string (e.g., "25") and log its type.
let data = "33";
console.log(typeof data);//string

// 	16.	Use typeof to check the type of a boolean variable.
let bool =true;
console.log(typeof bool);//boolean

// 	17.	Create three variables of types string, number, and boolean, and log their values.
let q1='boss',q2=322,q3=false;
console.log(`${q1} ${q2} ${q3}`);

// 	18.	Declare a variable without assigning a value. Log its type.
a=3443;
console.log(typeof a);//number

// 	19.	Create a variable with undefined and log its type.
let un;
console.log(typeof un);//undefined

// 	20.	Use const to create an array. Try reassigning the array and observe the error.
// const arr = [123,546,89,435,455];
let arr = [123,546,89,435,455];
try {
    arr = [12223,3546,8339,"updated",455];
    console.log(arr);

    } catch (error) {
        console.log(error);
        }

// 3. Loops (10 Questions)
// 	21.	Write a for loop to print numbers from 1 to 50.
for(let i = 1; i<51 ; i++){
console.log(i);
}

// 	22.	Use a while loop to sum the numbers from 1 to 10.
let f= 1;
let sum=0;
while (f<=10) {
    sum = sum + f;
    console.log(sum);
    f++;
}

// 	23.	Create a for...of loop to log each character of the string "JavaScript".
let g ='JavaScript';
for (const e of g) {
    console.log(e);
}

// 	24.	Write a for loop that skips even numbers between 1 and 20.
for(let j=1;j<21;j++){
    if (j%2 === 0) {
        console.log(`The ${j} is even number`);
    } else {
        continue;
    }
}

// 	25.	Use a do...while loop to log numbers from 5 to 1.
let h=5;
do {
    console.log(h);
    h--;
} while (h>=1 && h<5);

console.log('..................');

// 	26.	Create a for loop that calculates the factorial of 5.
let n = 5;
let ans = 1;
for (let t = n; t >= 1; t--) {
    ans=ans*t;
}
console.log(`factorial of ${n} is ${ans}`);


// 	27.	Write a nested loop to print a 3x3 grid of numbers.

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {
        console.log(`${i}, ${k}`); 
    }  
}
// 	28.	Use a for loop to reverse an array [1, 2, 3, 4].
let array = [1, 2, 3, 4];
let reversedArr=array.reverse();
console.log(reversedArr);


// 	29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
let w=1;
while (w<=100) {
    if (w%5 === 0) {
        console.log(`The ${w} is divisible by 5`);
    } else {
        // console.log(`The ${w} is not divisible by 5`); 
    }
    w++;
}


// 	30.	Use a for...in loop to iterate over an object and log its keys.
let obj = {
    name : 'Piyush Dahle',
    age : 24,
    email : 'piyushdahle33@gmail.com'
}

for (const key in obj) {
    console.log(key);
}

//extra 
let value = (Object.values(obj));

for (const val of value) {
    console.log(val);
}

         
// 4. Arrays (10 Questions)
// 	31.	Create an array of your top 5 favorite movies and log it.
let movie= ['Ironman','Avengers','Leo','Vikram','Pushpa']
console.log(movie);

// 	32.	Find and log the second element of an array.
console.log(movie[1]);

// 	33.	Add two new elements to the start of an array using .unshift().
movie.unshift('Thor','Hulk')

// 	34.	Remove the last element of an array and log the updated array.
movie.pop()
console.log(movie);

// 	35.	Use .slice() to extract the first three elements of an array.
const m = movie.slice(0,3)
console.log(m);

// 	36.	Find the index of a specific element in an array using .indexOf().
let index = movie.indexOf("Leo")
console.log(index);

// 	37.	Check if a value exists in an array using .includes().
let cc = movie.includes('Hulk');
let cc2 = movie.includes('Leos');
console.log(cc);//ture
console.log(cc2);//false

// 	38.	Combine two arrays [1, 2] and [3, 4] using .concat().
let a1 =[1,2]
let a2 =[3,4]
let newArr = a1.concat(a2);
console.log(newArr);

// 	39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
let ar = [5, 2, 9, 1]
let sortArr = ar.sort();
console.log(sortArr);

// 	40.	Write a program that creates a copy of an array without mutating the original.
let oldArr = [12,'piyush',334,null,'Dahle']
let copyArr = oldArr;
console.log(copyArr);


// 5. Functions (10 Questions)
// 	41.	Write a function to check if a number is even or odd.
let fun =(num)=>{
if(num%2===0){
console.log(`The ${num} is Even Number`);
}else{
    console.log(`The ${num} is Odd Number`);
}
}
fun(44)


// 	42.	Create a function to calculate the area of a circle with a given radius.
let pi = 3.14;

function areaOfCircle(r) {
    return pi*r*r;
}
let area= areaOfCircle(20);
console.log(`Area of the circle is ${area}`);


// 	43.	Write a function that accepts an array and returns the sum of its elements.
let arrs = [10,20,30,40,50];
let sum2 = 0;

function addArr() {
    for (let x = 0; x < arrs.length; x++) {
        sum2 = sum2+arrs[x]
    }
    console.log(`The sum of the array elements : ${sum2}`);
}
addArr()


// 	44.	Create a function that checks if a string starts with a specific character.
function check(str,char) {
    return (str.charAt(0)===char)
}
console.log(check('abc','a'));
console.log(check('abc','d'));


// 	45.	Write a function to find the maximum of two numbers.
function finding(n1,n2) {
  return n1>n2?`${n1} is greater than ${n2}`:`${n1} is less than ${n2}`
}
console.log(finding(20,5));
console.log(finding(20,65));


// 	46.	Create a function that takes a number and returns its factorial.
let ass = 1 ;
function factor(n) {
    for (let i = n; i <= 1; i--) {
        ass = ass * n;        
    }
    return ans
}
console.log(factor(5));


// 	47.	Write a function that accepts a string and returns its reverse.
function str(s) {
    return s.split('').reverse().join('');
}
let datas ='Piyush'
console.log(str(datas));

// 	48.	Create a function to find the largest number in an array.
let nums = [123,33,4,444,5,45,786,4,7,55,4,22]
function largestNum() {
    // let max = Math.max(...nums)
    // return max;
    let s = nums.sort();
    return s;
}
console.log(largestNum());

// 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").
const kebabCase = str => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase();

console.log(kebabCase('Hello World'));
console.log(kebabCase('Hello_World'));
console.log(kebabCase('HelloWorld'));



// 	50.	Create a function that logs "Hello, World!" every time it is called.
let funs = ()=>{
    return `Hello World!`
}

console.log(funs());
console.log(funs());
console.log(funs());


// 6. Conditionals (10 Questions)
// 	51.	Write a program to check if a number is positive, negative, or zero.
let numss = -10
if (numss > 0) {
    console.log(`The number is Positive`);
} else if (numss === 0 ) {
    console.log(`The number is Zero`);
}else{
    console.log(`The number is Negitive`);
}

// 	52.	Create a program to check if a year is a leap year.
let year =2007;
function leapYear(y) {
    if (y % 4 == 0 ) {
        
        if (y % 100 == 0) {
            return (y%400 == 0);
        }

        return true;

    } else {
        return false;
    }
}
if(leapYear(year)){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is not a leap year`);
}

// 	53.	Write an if...else statement to determine if a person can vote based on their age.
function voterAge(a) {
    if (a>=18) {
        console.log(`You are eligiable for vote`);
    } else {
        console.log(`You are not eligiable for vote`);
    }
}
voterAge(5);

// 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).
function dayName(n) {
    switch (n) {
        case 1:
        console.log(`Monday`);
         break;
        case 2:
        console.log(`Tuesday`);
         break;
         case 3:
         console.log(`Wednesday`);
        break;
        case 4:
        console.log(`Thursday`);
        break;
        case 5:
        console.log(`Friday`);
        break;
        case 6:
        console.log(`Saturday`);
        break;
        case 7:
        console.log(`Sunday`);
        break;
        default :
        console.log(`Invalid day`);
        break;
    }   
}
dayName(8)     
            
// 	55.	Write a program to check if a number is divisible by 3 and 5.
function cherker(n) {
    if (n%3===0 && n%5===0) {
        console.log(`the number is divisible by 3 and 5`);
    } else {
        console.log(`the number is not divisible by 3 and 5`);
    }
}
cherker(15);
cherker(10);

// 	56.	Create a program to check the grade of a student based on marks.
function grade(m) {
    if(m>=80){
        console.log(`A`);
    }else if(m>=60 && m<80){
        console.log(`B`);
    }else if(m>=40 && m<60){
        console.log(`C`);
    }else{
        console.log(`Fail`);
    }
}
grade(90);
grade(70);
grade(50);

// 	57.	Write an if condition to compare two strings and log if they are equal.
let str1 = "Hello";
let str2 = "Hello";
if(str1 === str2){
    console.log(`The strings are equal`);
    }else{
        console.log(`The strings are not equal`);
        }

// 	58.	Use a ternary operator to check if a number is even or odd.
let num = 44;
console.log(num%2===0 ? `Even` : `Odd`);

// 	59.	Write a program to find the largest of three numbers using if...else.
function largestNum(n1,n2,n3) {
    if (n1>n2 && n1>n3) {
       console.log(`${n1} is the lagest number`);
    } else if (n2>n1 && n2>n3) {
        console.log(`${n2} is the lagest number`);
     }else if (n3>n1 && n3>n2) {
        console.log(`${n3} is the lagest number`);
     }else{
        console.log(`All numbers are equal`);
     }
}
largestNum(12,33,44)
largestNum(100,33,44)
largestNum(12,330,44)
largestNum(12,12,12)


// 	60.	Create a program to calculate the discount based on the price of an item.
function discount(lp,sp) {
        return ((lp-sp)/lp)*100;
}
let lps =200;
let sps = 150;
console.log(`The MRP is Rs.${lps} and selling price is Rs.${sps}`);
console.log(`The discount price is ${lps-sps} and discount % is ${discount(lps,sps)}%`);

// 7. Object Basics (10 Questions)
// 	61.	Create an object with properties name, age, and city. Log the object.
let personData = {
    name: "John",
    age: 25,
    city: "New York"
}
console.log(personData);


// 	62.	Add a new property isStudent to the object above and set it to true.
personData.isStudent = true;
console.log(personData);

// 	63.	Access and log the value of the city property using bracket notation.
let val = Object.values(personData.city);
console.log(val.join(''));

// 	64.	Delete the age property from an object and log the updated object.
delete personData.age;
console.log(personData);

// 	65.	Write a function that accepts an object and logs all its keys.
function ObjectKey(obj) {
    return Object.keys(obj);
}
console.log(ObjectKey(personData));

// 	66.	Create an array of objects representing books with title and author properties.
let books = [
    {title: "Book1", author: "Author1"},
    {title: "Book2", author: "Author2"},
    {title: "Book3", author: "Author3"},
    ];
    console.log(books);

// 	67.	Access and log the author of the second book in the array.
console.log(books[1].author);

// 	68.	Write a program to check if a specific key exists in an object.

let newObj ={
    name: "piyush dahle",
    age: 24,
    email :'piyushdahle@gmail.com'
}
function checkerKey(k) {
    let datass = Object.keys(newObj);
    // console.log(datass);
    
    for (let i = 0; i < array.length; i++) {
        if ( k === datass[i]) {
            console.log('the key value is presest');
            return true;
        } else {
            console.log('the key value is not presest');
            return false;
        }
    }
}

checkerKey('name');
checkerKey('names');

// 	69.	Create a function to count the number of keys in an object.
function count(obj) {
    let g = Object.keys(obj)
    return g.length;
}
console.log(count(newObj));

// 	70.	Use Object.assign() to merge two objects.
console.log(newObj);
console.log(personData);
let neww =Object.assign(personData,newObj)
console.log(neww);


// 8. String Manipulation (10 Questions)
// 	71.	Create a string and log its length.
let sss = 'Jai-Shree-Ram'
console.log(sss.length);

// 	72.	Extract the last 4 characters of a string.
let nnn = sss.length - 4;
console.log(sss.slice(nnn,sss.length));

// 	73.	Convert a string to lowercase and log it.
let lower = sss.toLowerCase()
console.log(lower);

// 	74.	Split a sentence into words using .split() and log the result.
console.log(sss.split(''));

// 	75.	Find the position of the first occurrence of "a" in a string.
console.log(sss.search('a'));

// 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
let string = " I love JavaScript ";
console.log(string.replace('JavaScript','JS'));

// 	77.	Repeat a string 3 times using .repeat().
console.log(`${string.repeat(3)}`);

// 	78.	Create a function that checks if a string contains a specific word.
let newStr = "Piyush Dahle"
function lookingMatch(word) {
    let i = newStr.search(word)
    if (newStr[i] === word) {
        return `The string '${newStr}' has the word ${word}`;
    } else {
        return `The string '${newStr}' has not the word ${word}`;
    } 
}
console.log(lookingMatch('s'));

// 	79.	Write a program to remove whitespace from both ends of a string.
let bmw = '        New braned MODEL       ' 
console.log(bmw.trim());

// 	80.	Create a function to count the number of vowels in a string.
console.log(newStr);
// console.log(newStr[1]);
function countVowel(string) {
    let count = 0 ;
    let str = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (str[i] === 'a'||str[i] === 'e'||str[i] === 'i'||str[i] === 'o'||str[i] === 'u') {
            count++;
        } else {
            continue;
        }
    }
    return count;
}
let vals =countVowel('piyush');

console.log(vals);


// Mixed Practice (20 Questions)
// 	81.	Write a function that accepts an array of numbers and returns only the even numbers.
let aaa = [12,33,4,42,221,22,66,3,5]
function evenNum(arr) {
    for(let i = 0; i <arr.length ; i++){
          if (arr[i]%2===0) {
            console.log(`${arr[i]} is even number in array`);
          }
    }
}
evenNum(aaa);

// 	82.	Create a program to count the occurrences of a specific value in an array.
let bbb = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 8];
let valueToCount = 7;
function occurs(arr,value) {
let count = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i]===value) {
     count++;    
    }
}
return count;
}
console.log(occurs(bbb,valueToCount));

// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.
let ccc = "madam";
function palindrome(str) {
    let rev = str.split('').reverse().join('');
    if (str === rev) {
        console.log('it’s a palindrome string');
        return true;
    }   
    else {
            console.log('it’s not a palindrome string');
            return false;
            }
}
palindrome(ccc);

// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****
let nfs = 4;
for (let r = 0; r <= nfs; r++) {
    let ssss = `* `;
    console.log(ssss.repeat(r)); 
}

// 	85.	Write a function that returns the square of each number in an array.
function squre(n) {
    return n*n;
}
console.log(squre(2));
console.log(squre(5));


// 	86.	Use a for loop to sum all odd numbers between 1 and 50.
function addOdd(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i%2===0) {
            continue;
        } else {
            sum = sum + i;
        }
    }
    console.log(`The sum of all odd number from 1 to ${n} is ${sum}`);
    }

addOdd(50);

// 	87.	Create an object representing a person and log their full name.
const person = {
    firstName: 'John',
    lastName: 'Doe'
}
let names = Object.values(person)
console.log(names.join(' '));


// 	88.	Write a program to convert the string "10" to a number and add 5 to it.
let st ='10'
let newN = parseInt(st)
console.log(newN + 5);
console.log('........');


// 	89.	Write a program to reverse an array without using .reverse().
let baseArr = [22,33,44,55,66]
let newArrs =[]
for (let i = baseArr.length -1; i >= 0; i--) {
    newArrs.push(baseArr[i])
}
console.log(newArrs);

// 	90.	Create a program to check if an array is empty.
let emptyArr = [2]
if (emptyArr == []) {
    console.log('array is empty');
} else {
    console.log('array is not empty');
}

// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
let curentDate = new Date();
let dates = curentDate.getDate()
let months = curentDate.getMonth()
let years = curentDate.getFullYear()
console.log(`${dates}/${months+1}/${years}`);


// 	92.	Write a program to find the smallest number in an array.
let www = [12,3213,7,5,5,546,32,67,45,3,243]
let minNum = Math.min(...www)
console.log(minNum);

// 	93.	Create a function to return the Fibonacci sequence up to n terms.
function fibonacci(n) {
    let n1 = 0,n2=1, nextNum;
    for (let i = 0; i <= n; i++) {
        console.log(n1);
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }
}
fibonacci(10)


// 	94.	Use a try...catch block to handle division by zero.
let divin = (x,y) => {
    try {
        if (y===0) {
            throw new Error('division by zero is not allowed');
        }
        let result = x/y;
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}
// divin(10,0)
divin(10,4)

// 	95.	Write a program to find the index of the first vowel in a string.
function vowelChecker(str) {
    str.toLowerCase;
    for (let i = 0; i < str.length; i++) {
        if (str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u') {
            console.log(`The first vowel is ${str[i]} present in ${i} index`);
            break;
        }
    }
}
vowelChecker('Piyush Dahle')
// 	96.	Create a function that accepts an array and returns only unique values.
function uniqueValue(arr) {
    return [...new Set(arr)]
}
let newVlaue = uniqueValue([1,2,3,4,5,5,6,7,7,8]);
console.log(newVlaue);

// 	98.	Create a function to count the number of words in a string.
function countStr(str) {
    let countWord = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === ' '){
            continue;
        }
        countWord++;
    }
    return countWord;
}
console.log(countStr('Hello      Baby      Girl'));


// 	99.	Write a program to toggle a button’s background color when clicked.
// const button = document.getElementById('btn');

// button.addEventListener('click', () => {
//     if (button.style.backgroundColor === 'green') {
//         button.style.backgroundColor = 'blueviolet';
//     } else {
//         button.style.backgroundColor = 'green';
//     }
// });


// 	100.	Write a function to check if all elements in an array are greater than a specific value.
function greaterVal(arr,n) {
    let newAr = [];
    for (let i = 0; i < arr.length; i++) {
if (arr[i]>n) {
    newAr.push(arr[i]);
} else {continue;}
    }
 return [...new Set(newAr)];
  
}
console.log(greaterVal([1000,20,2,50,6,70,8,8,9,,10,10,55,77,4,545,47,100,14],15));




