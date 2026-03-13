class Vehicle{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        return `${this.brand} ${this.model} ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(brand, model, year, doors){
        super(brand, model, year);
        this.doors = doors;
    }
    getCarInfo(){
        return `${this.getInfo()}, Pintu : ${this.doors}`;
    }
}

class Motorcycle extends Vehicle{
    constructor(brand, model, year, type){
        super(brand, model, year);
        this.type = type;
    }
    getMotorInfo(){
        return `${this.getInfo()}, Tipe : ${this.type}`;
    }
}

let myCar = new Car("BMW", "M4-klasik", 2004, 4);
console.log(myCar.getCarInfo());

let myMotor = new Motorcycle("Ducati", "CB1928", 2015, "Sport");
console.log(myMotor.getMotorInfo());