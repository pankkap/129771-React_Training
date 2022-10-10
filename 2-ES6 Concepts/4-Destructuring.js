// Destructuring with Array

let arr = [2, 4, 6, 8, 10];
// a = arr[0];
// b = arr[1];
// c = arr[2];
// d = arr[3];
// e = arr[4];

// destructuring of Array
let [a, b, c, d, e] = arr;

console.log(a);
console.log(b);
console.log(e);

// destructuring selected or skipped some elements
let [x, , , , y] = arr;
console.log(x);
console.log(y);

// Destructuring an Object

let person = {
  name: "Manish",
  age: 30,
  email: "abc@gmamil.com",
  mobile: 78979879,
  city: "Mumbai",
};
// console.log(person.city);
// console.log(person.email);
// console.log(person.mobile);

// destructuring object
let { name, age, email, mobile, city } = person;
console.log(name);
console.log(age);
console.log(email);
