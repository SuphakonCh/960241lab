class Car {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    accelerate() {
        this.speed += 10;
    }
    brake() {
        this.speed -= 5;
    }
    status() {
        console.log(`${this.brand} is going at ${this.speed} km/h`);
    }
}
const car = new Car("Toyota");
car.accelerate();
car.status(); // Toyota is going at 10 km/h
car.brake();
car.status(); // Toyota is going at 5 km/h