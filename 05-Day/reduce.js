let arr = [10,20,30,40,50,60]

let ans = arr.reduce((acc,curr)=>{
    acc = acc+ curr;
    return acc;
},0)

console.log(ans);

let findMax = arr.reduce((max,curr)=>{
    if (curr>max) {
        max = curr;
    }
    return max;
},0)
console.log(findMax);
