const h1 = document.querySelector('h1')
const span = document.querySelector('span')
const box = document.querySelector('.box')
function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  
let timer = 3;

const interval = setInterval(()=>{

    --timer;

    if (timer === 0) {
        h1.innerHTML = '<button> Click Me </button>'
        
        clearInterval(interval)

        const btn = document.querySelector('button')
        
        btn.addEventListener('click',()=>{
            box.style.backgroundColor = getRandomRGBColor()
           })
    }
    span.textContent = timer
},1000)
