class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
// const dog = new Animal("Dog");
// dog.speak();

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}
const dog = new Dog("mocha poodle");
dog.speak();