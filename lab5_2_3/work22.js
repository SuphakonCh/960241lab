function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
};
const a1 = new Animal("Dog");
a1.speak(); 

function Dog(name) {
    Animal.call(this, name); 
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log(`${this.name} barks`);
};
const d1 = new Dog("Lucky");
d1.speak(); 
d1.bark(); 

console.log(d1.__proto__ === Dog.prototype); 
console.log(Object.getPrototypeOf(d1) === Dog.prototype);
console.log(d1 instanceof Dog); 
console.log(d1 instanceof Animal);