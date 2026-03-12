let person = {
    name: "Budi",
    age: 30,
    city: "Bogor",
};

console.log(person);

for(let key in person){
    console.log(`${key} : ${person[key]}`)
};