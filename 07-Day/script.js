// electing the Element
// 	1.	Write a function to select a <div> with the ID container and log it to the console.
// function select() {
//     const div = document.querySelector('#container');
//     console.log(div);
// }
// select()

// 	2.	Select all <li> elements inside a <ul> with the class menu and log them as an array.
// const menu = document.querySelectorAll('.menu li')
// let arr = [];
// menu.forEach(element => {
//     arr.push(element)
// });
// console.log(arr);

// let arr = [...menu];
// console.log(arr);

// 	3.	Write code to select the first <h1> element on a webpage and change its color to blue.
// const h1 = document.querySelector('h1') 
// h1.style.color = 'blue'

// 	4.	Select the element with the class card and add a border to it using JavaScript.
// const card = document.querySelector('.card');
// card.style.border = '10px solid blue'

// 	5.	Write a function to log all elements with the tag name button to the console.

// function btnss() {
//     const bb = document.querySelectorAll('button');
//     let arr = [...bb]
//     console.log(arr);
// }
// btnss()
// Changing the Text in JS
// 	6.	Select a <p> element with the class description and change its text to "Updated description".
// const p = document.querySelector('.description');
// p.textContent = 'Updated description'

// 	7.	Write a function that takes an ID of an element and changes its text to "Hello, World!".
// function changeText(id) {
//     const elem = document.querySelector(id)
//     if (elem) {
//         elem.textContent = 'Hello, World!';
//     } else {
//         console.log('you enter the wrong id');
//     }
// }
// changeText('#example')

// 	8.	Select a button with the ID submit and set its text to "Submit Form".
// const btn = document.querySelector('#submit');
// btn.textContent = 'Submit Form';

// 	9.	Replace the text inside a <span> element with the class price to "₹499".
// const price = document.querySelector('.price');
// price.textContent = 'Rs.499';


// 	10.	Write a function to change the text of all <h2> elements on the page to "Welcome to My Page".

// function changeText() {
//     const h2 = document.querySelectorAll('h2');
//   h2.textContent = 'Welcome to MyPage'         
// }
// changeText()