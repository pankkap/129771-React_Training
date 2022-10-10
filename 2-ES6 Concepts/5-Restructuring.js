// Restructuring

let name = "Pankaj";
let age = 35;
let job = "Trainer";
let city = "Delhi";

let training =()=>{
    console.log("This is React Training");
}

let person = { name, age, job, city, training };
console.log(person);
console.log(person.name);
person.training();