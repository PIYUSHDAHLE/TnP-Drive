//Square Pattern
// * * * * * 
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// let n = 5
// for (let i = 0; i < n; i++) {
//  let row = ''
//  for (let j = 0; j < n; j++) {
//     row = row + '*'
//  }
//  console.log(row);
// }

// Right-Angled Triangle
// * 
// * * 
// * * * 
// * * * * 
// * * * * *
// let n2 = 5;
// for (let i = 1; i <= n2; i++) {
//     let row= '';
//     for (let h = 1; h <= n2; h++) {
//         row= '*'.repeat(i);        
//     }
//     console.log(row);
// }

// Inverted Right-Angled Triangle
// * * * * * 
// * * * * 
// * * * 
// * * 
// *
// let n3 = 5;
// for (let i = 1; i <= n3; i++) {
//  let row = ''
//  for (let h = 1; h <= n3; h++) {
//     row = '*'.repeat((n3+1)-i)
//  }   
//  console.log(row);
// }

// Number Triangle
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5
// let num = 5;
// for (let i = 1; i <= num; i++) {
//     let row = ''
// for (let j = 1; j <= i; j++) {
//     row = row + j +' ';    
// }
// console.log(row);
// }

// Inverted Number Triangle
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1
// let num2 = 5;
// for (let i = num2; i >=1 ; i--) {
//  let row = ''
//  for (let g = 1; g <= i; g++) {
//     row = (row + g);
//  }   
//  console.log(row);
// }
// Pyramid Pattern
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * *
let num = 5
for (let i = num; i > 1; i--) {
     let row = ''
     row = ''.repeat(i-1) + '* '.repeat(num-i+1);
    console.log(row);   
}