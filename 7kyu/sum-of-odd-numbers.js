// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//Solution
function rowSumOddNumbers(n) {
  let firstNum = (n - 1) * n + 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (firstNum % 2 !== 0) {
      sum += firstNum;
    }
    firstNum += 2;
  }

  console.log(sum);
  return sum;
}

rowSumOddNumbers(1); //1
rowSumOddNumbers(2); //8
rowSumOddNumbers(3); //27
