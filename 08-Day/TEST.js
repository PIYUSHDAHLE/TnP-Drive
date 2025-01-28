
// 1.	Write a function to change the text of all <h2> elements on the page to "Welcome to My Page".
// function changeText() {
//     const h2 = document.querySelectorAll('h2');
//     h2.forEach((e)=>{
//         e.textContent = "Welcome to My Page"
//     })
// }
// changeText()

// 2.	Write a function that takes an element ID and replaces its content with a <button>Click Me!</button>.

// function replace() {
//     const btn = document.querySelector('#btn')

//     btn.addEventListener('click',()=>{
//         const element = document.querySelector('#change');
//         if (element) {
//             element.innerHTML = '<button>Click Me!</button>'
//         } else {
//             console.error(`The element with ID ${id} not found`);
//         }
        
//     })
// }
// replace()


// 3.	Create a function that takes an ID and adds an <img> tag with a placeholder image URL inside the element.
// function addImageToElement(elementId) {
//     const element = document.getElementById(elementId);

//     if (element) {
//       const img = document.createElement('img');
//       img.src = 'https://staticg.sportskeeda.com/editor/2022/01/b50e2-16417952205524.png'; 
//       img.alt = 'Placeholder Image';
//       img.style.display = 'block'; 
//       img.style.marginTop = '10px'; 
//       img.style.width = '300px'; 
//       img.style.height = '200px'; 
//       img.style.objectFit = 'cover'; 
//       img.style.borderRadius = '10px'; 

//       element.appendChild(img);
//     } else {
//       console.error(`Element with ID "${elementId}" not found.`);
//     }
//   }

//   const button = document.getElementById('addImageButton');
//   button.addEventListener('click', function () {
//     addImageToElement('imageContainer');
//   });

// 4.	Add a submit event listener to a form with the ID signup that prevents the default form submission.
// const form = document.getElementById('signup');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); 

//   console.log('Form submission prevented.');
//   alert('Form submission prevented!');
// });


// 5.	Write a function that adds a click event listener to all buttons on the page and changes their background to yellow when clicked.
// function addClick() {
//     const buttons = document.querySelectorAll('button');

//     buttons.forEach(button => {
//       button.addEventListener('click', function() {
//         this.style.backgroundColor = 'yellow';
//       });
//     });
//   }
// addClick();


// 6.	Write a function to add an event listener to all buttons, and when clicked, toggle the class active on them.
// function addToggle() {
//     const buttons = document.querySelectorAll('button');
//     buttons.forEach(button => {
//       button.addEventListener('click', function() {
//         this.classList.toggle('active');
//       });
//     });
//   }
//   addToggle();

// 7.	Write a function that creates a to-do list by appending <li> elements dynamically inside a <ul> with the ID todo-list.
// function setupTodoList() {
//     const input = document.getElementById('todo-input');
//     const addButton = document.getElementById('add-todo');
//     const todoList = document.getElementById('todo-list');


//     addButton.addEventListener('click', function() {
//       const task = input.value.trim(); 

//       if (task !== '') {
        
//         const li = document.createElement('li');
//         li.textContent = task;
        
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
   
//         deleteButton.addEventListener('click', function() {
//           todoList.removeChild(li);
//         });
       
//         li.appendChild(deleteButton);
       
//         todoList.appendChild(li);

//         input.value = '';
//       } else {
//         alert('Please enter a task!');
//       }
//     });
//   }

//   setupTodoList();

// 8.	Create a function that validates an email input field by adding/removing a class error based on the input value.
// function validateEmailInput() {
//     const emailInput = document.getElementById('email-input');
//     const errorMessage = document.querySelector('.error-message');

//     emailInput.addEventListener('input', function () {
//       const emailValue = emailInput.value.trim();
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

//       if (emailRegex.test(emailValue)) {
//         emailInput.classList.remove('error');
//         emailInput.classList.add('valid');
//         errorMessage.style.display = 'none';
//       } else {
//         emailInput.classList.add('error');
//         emailInput.classList.remove('valid');
//         errorMessage.style.display = 'block';
//       }
//     });
//   }
//   validateEmailInput();

// 9.	Write code to create a modal popup by adding a new <div> with some content and a close button when a button is clicked.
// function createModal() {

//     const modal = document.createElement('div');
//     modal.classList.add('modal');

//     const modalContent = document.createElement('div');
//     modalContent.classList.add('modal-content');

//     const content = document.createElement('p');
//     content.textContent = 'This is a modal popup!';

//     const closeButton = document.createElement('button');
//     closeButton.classList.add('close-btn');
//     closeButton.textContent = 'Close';

//     closeButton.addEventListener('click', function() {
//       modal.style.display = 'none';
//     });

//     modalContent.appendChild(content);
//     modalContent.appendChild(closeButton);
//     modal.appendChild(modalContent);

//   document.body.appendChild(modal);

//     modal.style.display = 'flex';
//   }

//   document.getElementById('showModalBtn').addEventListener('click', createModal);


// 10.	Build a function that changes the theme of a webpage (light/dark mode) by toggling classes on the <body> element.
// function toggleTheme() {
//     const body = document.body;
//     const toggleButton = document.getElementById('toggleThemeBtn');

//     body.classList.toggle('dark-mode');
//     body.classList.toggle('light-mode');

//     if (body.classList.contains('dark-mode')) {
//       toggleButton.textContent = 'Switch to Light Mode';
//     } else {
//       toggleButton.textContent = 'Switch to Dark Mode';
//     }
//   }

//   document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);

// 11.	Create a dropdown menu where clicking an item highlights it and logs its text to the console.
// function handleItemClick(event) {

//     const items = document.querySelectorAll('.dropdown-item');
//     items.forEach(item => item.classList.remove('highlight'));

//     event.target.classList.add('highlight');

//     console.log('Selected Item:', event.target.textContent);
//   }

//   const dropdownItems = document.querySelectorAll('.dropdown-item');
//   dropdownItems.forEach(item => {
//     item.addEventListener('click', handleItemClick);
//   });