// console.log("A1");
// var x = 10;
// if (x === 10) {
//     var y = 100;
//     console.log(y);
// }
// console.log(y);

// console.log("A2");
// var x = 10;
// if (x === 10) {
//     let y = 100;
//     console.log(y);
// }
// console.log(y);

// console.log("A3");
// var x = 10;

// let y = 100;
// if (x === 10) {
//     console.log(y);
// }
// console.log(y);

// console.log("B1");
// let myArray = [1, 2, 3];
// myArray.forEach(element => {
//     console.log(element);
// });

// console.log("B2");
// let myArray = [1, 2, 3];
// for(const iterator of myArray) {  
//     console.log(iterator);
// };

// console.log("B3");
// let dog = {
//     name: "Yoyo", 
//     color: "black", 
//     age: 2
// };
// for (const k in dog) {
//     console.log(k);
// }

console.log("C1");
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, numbersOne];
console.log(numbersTwo);

console.log("C2");

const numbersOneC2 = [1, 2, 3];
const numbersTwoC2 = [4, 5, ...numbersOneC2]; 
console.log(numbersTwoC2);

console.log("NO.4");
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i; 
    }
    return sum; 
}
let result = fun(1, 2, 3, 4);
console.log("ผลรวมคือ:", result);