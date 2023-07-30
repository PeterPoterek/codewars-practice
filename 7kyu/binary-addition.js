// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//Solution
function addBinary(a, b) {
  let sum = a + b;
  let result = "";

  if (sum === 0) {
    return "0";
  }

  while (sum > 0) {
    let remainder = sum % 2;

    result = remainder + result;

    sum = Math.floor(sum / 2);
  }

  console.log(result);
  return result;
}
addBinary(5, 9); //1100
