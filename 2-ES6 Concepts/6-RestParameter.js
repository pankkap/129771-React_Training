// Rest Operator: It is used to Pack the Data

function sum(...numbers) {
  console.log("Sum of all Numbers");
  var total = 0;
  
  numbers.forEach((element) => {
    total += element;
  });

  console.log(total);
}

sum(2, 4, 6, 5, 6, 7, 8, 9, 10, 12, 14, 12, 54, 23);
