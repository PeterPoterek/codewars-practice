// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//Solution
function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  let result = 0;
  if (Number.isInteger(sqrt)) {
    result = sq + sqrt * 2 + 1;
    console.log(result);
    return result;
  } else {
    return -1;
  }
}

findNextSquare(121); //144
findNextSquare(625); //676
