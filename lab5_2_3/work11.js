function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
};
const p1 = new Person("Piyavach", 17);
p1.greet();

console.log(p1.hasOwnProperty("name")); 
console.log("greet" in p1); 