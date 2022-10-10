// ES5 Variable: var
// ES6 Variable: let, const

// ES5: Var--> variable having Global Scope
// ES6: let--> varibale having function or block scope
// const: const is used to create a variable that can not be change
//  It is also block scope   

function sayHi() {
  if (true) {
    let message = "Welcome to React Training";
    const age = 10;
    // const is used to create a constant data 

    console.log(message);
    // console.log(++age);
    // Assignment to constant variable.
  }
  console.log(message);
}

sayHi();
