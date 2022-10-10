// ES5 Function

function sum(x, y) {
  return x + y;
}
console.log(sum(5, 10));

// Expression Function (Anonymous Function)
let add = function (x, y) {
  return x + x + y;
};
console.log(add(5, 10));

// ES6 Arrow Function
// Arrow function notation
let addition = (x, y) => x + y;

let result = addition(10, 20);
console.log(result);

let sq = (x) => x * x;
let msg = () => console.log("This is Single message");
let anothermsg = () => {
  console.log("One or Two line of code");
  console.log("another line of code");
};

let arr = [2, 4, 6, 8, 10];
arr.forEach((element) => {
  console.log(element);
});

let names = ["John", "Mike", "Parker"];
let lengths = names.map((name) => name.length);
console.log(lengths);
