// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//Solution
function opposite(number) {
  let result = number * -1;
  console.log(result);
  return result;
}

opposite(1);
opposite(14);
opposite(-34);
