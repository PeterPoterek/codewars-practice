// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

//Solution
function SeriesSum(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const term = 1 / (1 + 3 * i);
    sum += term;
  }

  const roundedSum = sum.toFixed(2);

  return roundedSum;
}

// Example usage:
console.log(seriesSum(1));
console.log(seriesSum(2));
console.log(seriesSum(5));
