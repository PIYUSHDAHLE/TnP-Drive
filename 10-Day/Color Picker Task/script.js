const redInput = document.querySelector('#red')
const greenInput = document.querySelector('#green')
const blueInput = document.querySelector('#blue')

const colorBox = document.querySelector('.color-box')
const colorCode = document.querySelector('.color-code')
const gBtn = document.querySelector('#generate-btn')
const saveBtn = document.querySelector('#save-btn')
const ss = document.querySelector('#sss')

const saveSize = 5;
let saveColorArr = [];

colorBox.style.backgroundColor = 'white'

function updateColor() {
    let r = Number(redInput.value);
    let g = Number(greenInput.value);
    let b = Number(blueInput.value);

    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    let rgbColor = `rgb(${r},${g},${b})`;
    colorBox.style.backgroundColor = rgbColor;
    colorCode.textContent =`RGB : ${rgbColor}`
}

function gRandomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    updateColor()
}


function saveColor() {
 let color = colorBox.style.backgroundColor;
 
 if (saveColorArr.includes(color)) {
    alert("Color already saved");
 }

 if (saveColorArr.length > saveSize) {
    saveColorArr.shift();
    ss.removeChild(ss.firstChild);
 }

 saveColorArr.push(color);
 
const colorBlock = document.createElement('div');
colorBlock.classList.add("color-block");
colorBlock.style.backgroundColor = color;

ss.appendChild(colorBlock)

}

redInput.addEventListener("input",updateColor)
greenInput.addEventListener("input",updateColor)
blueInput.addEventListener("input",updateColor)
gBtn.addEventListener('click',gRandomColor)
saveBtn.addEventListener('click',saveColor)