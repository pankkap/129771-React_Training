//SpreadOperator --> Un-Packing the Data

const odd = [1, 3, 5, 7, 9];
const combine = [2, 4, 6, 8, ...odd];
console.log(combine);

function disp(a, b, c, d, e) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}

disp(...odd);
