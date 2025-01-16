//[BEGINNER] make a function which takes a value and return that value with 2 added on it .
const adding = (a)=>{
    return (a+2);
}

console.log(adding(15));

//[INTERMEDIATE] make a function which takes a  value and return that value with 2 added on it, if the data sent during the call is not a number, print that please pass number   

let data = prompt("Enter the number");
let newdata = Number(data);
const add = (a)=>{
    if (isNaN(a) === true){
        console.log('please pass number');
    }
    else{
        console.log(`The ${a+2} is the number`);
    }
}
console.log(add(newdata));


//[BEGINNER] make a loop which prints all the numbers from 1 to 20.
for(let i=1;i<=20;i++){
    console.log(i);
}

//[INTERMEDIATE] make a loop which prints all the numbers from 1 to 20, except 12 ,13 ,14.
for(let i=1;i<=20;i++){
    if (i!==12 && i!==13 && i!==14) {
        console.log(i);
        continue;
    }
}

//[BEGINNER] make an array filled with numbers and print all of them.
const arr = [1,2,3,4,5]
for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
}

//[INTERMEDIATE] make an array filled with numbers and strings, print only the numbers.
const arr2 = [1,2,3,4,5,'hello','world']

for (let i = 0; i < arr2.length; i++) {
 if(isNaN(i)=== true){
    continue;
 }else if(typeof arr[i]  === 'number'){
    console.log(arr[i]);
 }else{
    continue;
 }
}