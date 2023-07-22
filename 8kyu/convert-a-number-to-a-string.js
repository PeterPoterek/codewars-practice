// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//Solution
function numberToString(num) {
  let result = num.toString();
  console.log(result);
  return result;
}

numberToString(123);
numberToString(999);
numberToString(-100);
