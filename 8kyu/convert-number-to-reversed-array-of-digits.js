// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//Solution
function digitize(n) {
  let stringArr = n.toString().split("");
  let sortedArr = [];

  for (let i = stringArr.length - 1; i >= 0; i--) {
    sortedArr.push(parseInt(stringArr[i]));
  }

  return sortedArr;
}

digitize(35231); // [1,3,2,5,3]
digitize(0); // [0]
