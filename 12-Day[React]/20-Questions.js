// 1. Extract the first and third elements from the array numbers = [5, 10, 15, 20] using destructuring.
// let number = [5, 10, 15, 20];
// let first = number[0];
// let third = number[2];
// console.log(first);
// console.log(third);


// 2. Swap the values of a and b using array destructuring.
// let arr = [10,20];
// let [a,b] = arr;
// console.log(`b:${b} and a:${a}`);
//  [b,a] = [a,b]
//  console.log(`b:${b} and a:${a}`);
 
// 3. Destructure the object {name: "John", age: 25, city: "New York"} to extract name and city into separate variables.
// const obj =  {name: "John", age: 25, city: "New York"}
// let n = obj.name;
// let c = obj.city;
// console.log(`city : ${c} and name : ${n}`);

// 4. Using destructuring, assign a default value of "Guest" to user if it is not present in the object {id: 101}.
// const obj = {id :101};
// const {name = 'guest'} = obj;
// console.log(name);

// 5. Extract first and last from the nested object {person: {first: "Alice", last: "Johnson"}} using destructuring.
// const obj =  {person: {first: "Alice", last: "Johnson"}}
// let {first, last} = obj.person
// console.log(`first : ${first} and last : ${last}`);

// 6. Use array destructuring to ignore the second element of [100, 200, 300] and store the rest in another variable.
// let arr = [100,200,300];
// let  [a,b,...rest] = arr;
// let newArr = [a,...rest];
// console.log(newArr);

// 7. Destructure the array [1, 2, 3, 4] inside a function parameter and return the sum of all elements.
// let arr =  [1,2,3,4];
// function sum([a,b,c,d]) {
    // return  a+b+c+d;
// }
// console.log(sum(arr));

// 8. Destructure an object {name: "David", age: 30, job: "Developer"} and rename job to profession.
// const obj = {name: "David", age: 30, job: "Developer"}
// const {name , age , job : profession} = obj
// console.log(profession);

// 9. Destructure the following nested array [[1, 2], [3, 4]] to extract 1 and 4.
// let array = [[1, 2], [3, 4]];
// let e1 = array[0];
// let e2 = array[1];
// let s1 = e1[0];
// let s2 = e2[1];
// console.log(`${s1} and ${s2}`);


// 10. Destructure an array [10, 20] and swap the values inside an if condition only if the first value is smaller than the second.
// let arr = [10,20];
// let [a,b] = arr;
// console.log(`a: ${a} and b: ${b}`);
// if (arr[0]<arr[1]) {
//     [b,a] = [a,b];
//     console.log(`a: ${a} and b: ${b}`);
// }

// 11. Destructure the object {user: {id: 5, info: {na me: "Sam", city: "Paris"}}} and extract name and city.
// let obj = {user: {id: 5, info: {name: "Sam", city: "Paris"}}}
// let {name, city} = obj.user.info
// console.log(`name : ${name} and city : ${city}`);

// 12. Given an array [10, [20, 30], 40], destructure it to extract 10, 30, and 40 into separate variables.
// let array = [10, [20, 30], 40]
// let v1 = array[0]
// let v2 = array[1]
// let v3 = v2[1]
// let v4 = array[2]
// console.log(`${v1}, ${v3}, ${v4}`);


// 13. Using array destructuring, loop over an array [[1, "one"], [2, "two"], [3, "three"]] and print each key-value pair.
// let array = [[1, "one"], [2, "two"], [3, "three"]];
// for (const [key , value] of array) {
//    console.log(`key : ${[key]}, value : ${value}`);  
// }


// 14. Write a function that takes an object {a: 5, b: 10, c: 15} as an argument and returns the sum of a and c using destructuring.
// function sumAandC({ a, c }) {
//     return a + c;
//   }
//   const obj = { a: 5, b: 10, c: 15 };
//   console.log(sumAandC(obj));

// 15. Destructure a nested object {data: {user: {id: 3, details: {age: 25, country: "India"}}}} and extract id and country.
// const obj = {data: {user: {id: 3, details: {age: 25, country: "India"}}}};
// const {
//   data: {
//     user: { id, details: { country } }
//   }
// } = obj;
// console.log(id);
// console.log(country);


// 16. Given const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}, destructure to extract 3 and 6.
// const obj = { a: [1, 2, { b: 3 }], c: { d: 4, e: [5, 6] } };
// const { a: [, , { b }], c: { e: [, six] } } = obj;
// console.log(b); 
// console.log(six);

// 17. Destructure an object {items: [{price: 100}, {price: 200}], discount: 0.1} to calculate the total price after discount.
// const obj = {items: [{price: 100}, {price: 200}], discount: 0.1};
// const { items: [{ price: price1 }, { price: price2 }], discount } = obj;
// const totalPrice = (price1 + price2) * (1 - discount);
// console.log(totalPrice);

// 18. Use destructuring in function parameters to pass {name: "Alice", scores: [80, 90, 100]} and return the average score.
// const pass = {name: "Alice", scores: [80, 90, 100]}

// function avg({name , scores}) {
//    let a = (scores[0] + scores[1] + scores[2])/scores.length;
//     return `${name} average score is ${a}`;
// }

// console.log(avg(pass));


// 19. Given const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}], use destructuring inside map() to extract id and name.
// const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}]
// users.map(({id,name})=>{
//   console.log(`id : ${id} and name : ${name}`);
// })

// 20. Destructure an array [["x", 1], ["y", 2], ["z", 3]] using forEach() and log "Key: x, Value: 1" format for each pair.
// let  array = [["x", 1], ["y", 2], ["z", 3]]

// array.forEach(([key, value])=>{
//     console.log(`key : ${key} value : ${value}`);
// })

