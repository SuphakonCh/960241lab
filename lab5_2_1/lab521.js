console.log("1");
const student = { 
  name: "Piyavach", 
  age: 17, 
  grade: "A" 
}; 

// let myName = student.name;
// let myAge = student.age;
// let myGrade = student.grade;
// console.log(myName);

const { name, age, grade } = student; 
console.log(name); 

console.log("2");
function sayHello(name = "Guest") {
    console.log("Hello, " + name );
}
sayHello();
sayHello("Aun");


console.log("3");
const words = ["JavaScript", "is", "fun"]; 
const sentence = words.join(" ");
console.log(sentence);


console.log("4");
const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6]; 
const result = arr1.concat(arr2); 
console.log(result);


console.log("5");
let fruits = ["apple", "banana"]; 
fruits.push("mango");    
fruits.pop();             
fruits.unshift("orange");
fruits.shift();  


console.log("6");
let colors = ["red", "green", "blue", "yellow"]; 
colors.splice(1, 2, "purple"); 
console.log(colors);


console.log("7");
let numbers = [0, 1, 2, 3, 4, 5]; 
const sliced = numbers.slice(2, 5); 
console.log(sliced); 


console.log("8");
const numbers2 = [10, 20, 30, 40, 50]; 
console.log(numbers2.indexOf(30));           
console.log(numbers2.find(num => num > 25));
console.log(numbers2.findIndex(num => num > 25));


console.log("9");
const prices = [100, 200, 300]; 
const pricesWithVAT = prices.map(price => price * 1.07); 
console.log(pricesWithVAT); 


console.log("10");
const scores = [45, 67, 89, 32, 50, 90];
const passed = scores.filter(score => score >= 50); 
console.log(passed);


console.log("11");
const cart = [100, 200, 50, 150]; 
const total = cart.reduce((sum, price) => sum + price, 0); 
console.log(total); 


console.log("12");
const nums = [5, 2, 9, 1, 5, 6];
const asc = [...nums].sort((a, b) => a - b); 
console.log(asc);

const desc = [...nums].sort((a, b) => b - a); 
console.log(desc);