arr =  [12,3,32,43,22,12]

function double(n) {
    return n*2;
}
const output = arr.map(double) 
console.log(output);

function cude(n) {
    return n*n*n;
}
const output2 = arr.map(cude)
console.log(output2);

function binary(b) {
    return b.toString(2);
}
const output3 = arr.map(binary)
console.log(output3);