let arr= [12,33,21,11,22,33,44,90]

function EvenNum(n) {
    return n%2===0;
}
const output = arr.filter(EvenNum) 
console.log(output);
function oddNum(n) {
    return n%2;
}
const output2 = arr.filter(oddNum) 
console.log(output2);
function Num(n) {
    return n>40;
}
const output3 = arr.filter(Num) 
console.log(output3);
