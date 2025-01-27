// selecting the Element
// 	1.	Write a function to select a <div> with the ID container and log it to the console.

// function calling() {
//     const box = document.querySelector('#container')
//     console.log(box);
// }

// calling()

// 	2.	Select all <li> elements inside a <ul> with the class menu and log them as an array.

// const list = document.querySelectorAll('li')
// let arr =[]
// for (let i = 0; i < list.length; i++) {
//     arr.push(list[i])
// }
// console.log(arr);


// 	3.	Write code to select the first <h1> element on a webpage and change its color to blue.
// const h1 = document.querySelector('h1')

// h1.classList.add('text-blue-500')


// 	4.	Select the element with the class card and add a border to it using JavaScript.
// const card = document.querySelector('.card')

// card.style.border = '3px solid black'

// 	5.	Write a function to log all elements with the tag name button to the console.
// const btn = document.querySelectorAll('button')

// function btns() {
//     console.log(btn);
// }
// btns()

// Changing the Text in JS
// 	6.	Select a <p> element with the class description and change its text to "Updated description".

// const p = document.querySelector('.description')

// p.textContent = 'Updated description'

// 	7.	Write a function that takes an ID of an element and changes its text to "Hello, World!".

// const datas = document.querySelector('#data')

// function text(ids) {
//     ids.textContext = 'Hello, World!'
// }

// text(datas)

// 	8.	Select a button with the ID submit and set its text to "Submit Form".
// const sub = document.querySelector('#submit')
// sub.textContent = 'Submit Form'

// 	9.	Replace the text inside a <span> element with the class price to "₹499".

// const price = document.querySelector('.price')

// price.textContent = "₹499"

// 	10.	Write a function to change the text of all <h2> elements on the page to "Welcome to My Page".

// const h =  document.querySelectorAll('h2')

// function change(head) {
//     head.forEach(element => {
//         element.textContent = 'Welcome to My Page'
//     });
// }

// change(h)

// Changing the HTML in JS
// 	11.	Select a <div> with the ID content and replace its inner HTML with a new <h2> and <p> element.

// const content = document.querySelector('#content') 

// content.innerHTML = '<h2> Heading </h2><p> paragraph </p>'

// 	12.	Write a function that takes an element ID and replaces its content with a <button>Click Me!</button>.
// const c = document.querySelector('#content')

// c.innerHTML = '<button>Click Me!</button>'

// 	13.	Select an element with the class info and append a <strong> tag with the text "Important" inside it.
// const info = document.querySelector('.info')
// const s = document.createElement('strong')
// const para = document.createElement('p')

// s.textContent = 'Important'
// para.textContent = 'This is the imp JS file'

// info.append(s,para)

// 	14.	Replace the content of a <div> with ID main with an unordered list containing three <li> items.

// const content = document.querySelector('#main')
// const ul = document.createElement('ul')

// ul.innerHTML = '<li>Sumsung </li> <li> I Phone </li> <li> Realme </li>'

// content.innerHTML = '' //clear any exist tags

// content.append(ul)


// 	15.	Create a function that takes an ID and adds an <img> tag with a placeholder image URL inside the element.
// const box = document.querySelector('#box');
// function addImg(id) {
//     const img = document.createElement('img')
//     img.src = 'https://i.pinimg.com/736x/40/30/9b/40309b8b401b7a53ccffd1e932a39339.jpg';
//     img.alt = 'Ironman'
//     img.className = 'w-[200px] h-[300px] object-cover'
//     id.appendChild(img)
// }
// addImg(box)

// Changing the CSS via JS
// 	16.	Select a <div> with the class box and change its background color to red.
// const box = document.querySelector('.box')/
// box.style.backgroundColor = 'rgb(215, 81, 81)'

// 	17.	Write a function that takes an element ID and sets its font size to 20px.

// const h = document.querySelector('h1')
// function changeFontSize(id) {
//     id.style.fontSize = '20px'
// }
// changeFontSize(h)

// 	18.	Select all <h1> elements and change their text color to green.
// const h = document.querySelectorAll('h1');
// h.forEach((e)=>{
//   e.style.color = 'green'
// })

// 	19.	Change the display property of an element with the class hidden to block.
// const h1 = document.querySelector('h1')
// h1.style.display = 'block'

// 	20.	Write a function that toggles the visibility of an element (hide/show) when called.
// const btn = document.querySelector('button')
// function toggle(element) {
//     element.addEventListener('click',()=>{
//             if (element.style.display === 'none') {
//                 element.style.display = 'block'
//             } else {
//                 element.style.display = 'none'
//             }
//     })
// }
// toggle(btn)
 
// Adding/Removing Event Listeners
// 	21.	Add a click event listener to a button with the ID login that logs "Button clicked!" to the console.
// const login = document.querySelector('#login');
// login.addEventListener('click',()=>{
//     console.log('Button clicked!');
// })

// 	22.	Write a function to remove a mouseover event listener from an element with the class hoverable.
// Select the element with the class 'hoverable'
// const screen = document.querySelector('.hoverable');
// const btn = document.querySelector('#btn')
// // Add a mouseover event listener to the element

// function screenHandler() {
//     console.log('Mouse over the element');
// }

// screen.addEventListener('mouseover', screenHandler);

// btn.addEventListener('click',()=>{
//     screen.removeEventListener('mouseover', screenHandler)
//     console.log('btn is clicked');
// })

// 	23.	Add a submit event listener to a form with the ID signup that prevents the default form submission.

// const form = document.querySelector('#signup');

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log('Form submitted');
// })

// 	24.	Attach a keydown event listener to the document and log the key pressed to the console.
// window.addEventListener('keydown',(e)=>{
//   console.log(`${e.key} key is pressed`);
// })

// 	25.	Write a function that adds a click event listener to all buttons on the page and changes their background to yellow when clicked.
// const btn = document.querySelectorAll('.btn')
// function bgChange(b) {
//     b.forEach(element => { 
//         element.addEventListener('click',()=>{
//             if (element.style.backgroundColor === 'purple' ) {
//                 element.style.backgroundColor = 'yellow'; 
//                 element.style.color = 'black'; 
//             } else {
//                 element.style.backgroundColor = 'purple'; 
//                 element.style.color = 'white'; 
//             }
//         })
//     });
// }
// bgChange(btn)


// Adding/Removing Classes to HTML Elements
// 	26.	Add a class highlight to all <p> elements with the class paragraph.
// const p = document.querySelectorAll('.paragraph')

// p.forEach((e)=>{
//     e.classList.add('highlight')
// })


// 	27.	Write a function to toggle the class active on an element when clicked.

// const btn = document.querySelector('.btn');

// function toggles(b) {
//     b.addEventListener('click', () => {
//         b.classList.toggle('active');
//         console.log('btn is Clicked');
//     })
// }

// toggles(btn)

// 	28.	Remove the class hidden from a <div> with the ID popup.
// const popup = document.querySelector('#popup')
// const btn = document.querySelector('#showPopup')

// btn.addEventListener('click',()=>{
//     popup.classList.remove('hidden')
// })

// 	29.	Add a class selected to all <li> elements inside a <ul> with the class list.
// const li = document.querySelectorAll('ul li');

// li.forEach((e)=>{
//     e.classList.add('selected')
// })

// 	30.	Write a function that removes the class disabled from a button with the ID submit.
// const  submit = document.querySelector('#submit');

// function dis(s) {
// s.addEventListener('click',()=>{
//     s.classList.remove('disabled')
//     console.log('BTN IS CLICKED');
// })
// }

// dis(submit)

// Adding/Removing IDs to HTML Elements
// 	31.	Write code to add the ID featured to a <div> with the class hero.
// const hero = document.querySelector('.hero')

// if (hero) {
//     hero.id = 'featured';
// }

// 	32.	Remove the ID old-id from an element and add a new ID new-id to it.
// const old = document.querySelector('#old');
// if (old) {
//     old.id = 'new';
//     console.log(old);
// }

// 	33.	Write a function that sets a unique ID to each <li> in an ordered list.
// function setId(list) {
//     const char = 'zxcvbnmasdfghjklqwertyuiop' 
//     list.forEach(li => {
//         let res = ''
//         for (let i = 0; i < 8; i++) {
//             let random = Math.floor(Math.random()*char.length)
//             res += char.charAt(random);
//         }
//            li.id = res;
//     });
// }
// const li = document.querySelectorAll('li');
// setId(li)
// li.forEach(item => console.log(`id : ${item.id}`));

// 	34.	Add an ID header-main to the first <h1> element on the page.
// const h = document.querySelector('h1')
// if (h) {
//     h.id = 'header-main'
//     console.log(h);
// }


// 	35.	Remove the ID from an element with the class removable.
// const classRe = document.querySelector('.removable')
// if(classRe && classRe.id){
//     classRe.removeAttribute('id');
//     console.log(classRe)
// }


// Adding/Removing Attributes to HTML Elements
// 	36.	Add a src attribute with the value "image.webp" to an <img> element with the ID thumbnail.
// const thumb = document.querySelector('#thumbnail');
// if (thumb) {
//     thumb.src = 'image.webp'
// }

// 	37.	Remove the disabled attribute from a button with the class enable-button.
// const btn = document.querySelector('.enable-button')
// if (btn) {
//     btn.removeAttribute('disabled')
// }

// 	38.	Write a function to set a data-user-id attribute with the value "12345" to a <div> with the class profile.
// const div = document.querySelector('.profile')
// function setData(data) {
//     if (data) {
//           data.setAttribute('data-user-id','12345')   
//           console.log(data);
//     }
// }
// setData(div)

// 	39.	Select a <a> tag and add a target="_blank" attribute to open the link in a new tab.
document.addEventListener('DOMContentLoaded', function() {
    const a = document.querySelector('a');
    if (a) {
        a.setAttribute('target', '_blank');
        console.log(a);
    }
});



// 	40.	Remove the required attribute from all <input> elements inside a form with the ID registration.
const form =  document.querySelector('#registration') 
if (form) {
    const input =  form.querySelectorAll('input') 
    input.forEach((e)=>{
            e.removeAttribute('required')
        })
}


// Combining Multiple Topics
// 	41.	Write a function to add an event listener to all buttons, and when clicked, toggle the class active on them.


// 	42.	Create a function to select a <div> by ID, add a class selected, change its text to "Hello", and set its background color to yellow.
// 	43.	Add a click event listener to all <li> elements inside a <ul> that logs the text content of the clicked item.
// 	44.	Write a function to add a new <p> element inside a <div> with the ID content and set its text to "New Paragraph".
// 	45.	Add a mouseover event listener to an <img> that changes its src attribute to "hover.jpg".

// Real-Life Scenarios
// 	46.	Write a function that creates a to-do list by appending <li> elements dynamically inside a <ul> with the ID todo-list.
// 	47.	Create a function that validates an email input field by adding/removing a class error based on the input value.
// 	48.	Write code to create a modal popup by adding a new <div> with some content and a close button when a button is clicked.
// 	49.	Build a function that changes the theme of a webpage (light/dark mode) by toggling classes on the <body> element.
// 	50.	Create a dropdown menu where clicking an item highlights it and logs its text to the console.

