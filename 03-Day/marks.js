var eng = prompt('Enter the English Marks')
var sci = prompt('Enter the Science Marks')
var math = prompt('Enter the Maths Marks')

if (eng===null||sci===null||math===null && eng.trim()===''||sci.trim()===''||math.trim()==='') {
    console.log('plzz input the number');
} else {
    if (isNaN(eng) || isNaN(sci) ||isNaN(math)) {
        console.log('Enter the correct marks');
    }else{
        let m1= Number(eng)
        let m2= Number(sci)
        let m3= Number(math)
        
        let total = m1 + m2 + m3;
        let percentage = (total / 3);
        console.log(`The % of the three subjects is ${percentage.toFixed(2)}`);
    }
}