function Person(name, age, city){
    //deklarasi constructor ditandai dengan this
    this.name = name;
    this.age = age;
    this.city = city;

    //tidak menggunakan prototype
    // this.greet = function(){
    //     return `Hello, My name is ${this.name}`;
    // } 
    //menggunakan prototype
    Person.prototype.greet = function(){
        return `Hello, My name is ${this.name}`;
    } 
}

//dan dipanggil didalam object menggunakan keyword new
let person1 = new Person("Alice", 20, "Bogor");
let person2 = new Person("Budi", 21, "Jakarta");

console.log(person1.greet());
console.log(person2);