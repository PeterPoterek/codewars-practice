// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// 1 * 2^0 = 1 * 1 = 1
// 0 * 2^1 = 0 * 2 = 0
// 1 * 2^2 = 1 * 4 = 4
// 1 * 2^3 = 1 * 8 = 8

//Solution
const binaryArrayToNumber = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * Math.pow(2, arr.length - 1 - i);
  }
  console.log(result);
  return result;
};

binaryArrayToNumber([0, 0, 0, 1]); //1
binaryArrayToNumber([0, 0, 1, 0]); //2
binaryArrayToNumber([1, 0, 1, 1]); //11
