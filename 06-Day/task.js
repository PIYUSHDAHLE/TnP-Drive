// electing the Element
// 	1.	Write a function to select a <div> with the ID container and log it to the console.
const div = document.querySelector('#container')
function select(element) {
    console.log(element);
}
select(div)

// 	2.	Select all <li> elements inside a <ul> with the class menu and log them as an array.
const menu = document.querySelectorAll('.menu li')

let arr1 = []
menu.forEach(element => {
   arr1.push(element)
});
console.log(arr1);

let arr2 = [...menu]
console.log(arr2);



// 	3.	Write code to select the first <h1> element on a webpage and change its color to blue.
const h1 = document.querySelector('h1');
h1.style.color = 'blue'

// 	4.	Select the element with the class card and add a border to it using JavaScript.
const card = document.querySelector('.card');
card.style.border = '10px solid black'

// 	5.	Write a function to log all elements with the tag name button to the console.
const btns = document.getElementsByTagName('button')
function allElem(e) {
    const arr = [...e];
    console.log(arr);
}

allElem(btns)


// Changing the Text in JS
// 	6.	Select a <p> element with the class description and change its text to "Updated description".
const p = document.querySelector('.description')
p.textContent = "Updated description"

// 	7.	Write a function that takes an ID of an element and changes its text to "Hello, World!".
function getElementsByID(id) {
    const elem = document.querySelector(id)
    if (elem) {
       elem.textContent = 'xyz';
    } else {
        console.log('this id not found');
    }
}
getElementsByID('#examcple')


// 	8.	Select a button with the ID submit and set its text to "Submit Form".

const sub = document.querySelector('#submit')
 sub.textContent = "Submit Form"

// 	9.	Replace the text inside a <span> element with the class price to "₹499".
const pri = document.querySelector('.price');
pri.textContent = "₹499";

// 	10.	Write a function to change the text of all <h2> elements on the page to "Welcome to My Page".
function changeText() {
    const h2 = document.querySelectorAll('h2');
    h2.forEach((elem)=>{
       elem.textContent = 'Welcome' 
    })
}
changeText()