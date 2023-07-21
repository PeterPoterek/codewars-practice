// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//Solution

function highAndLow(numbers) {
  let numArr = numbers.split(" ");

  numArr = numArr.map((num) => Number(num));

  let max = numArr[0];
  let min = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < min) {
      min = numArr[i];
    }
  }

  console.log(max);
  console.log(min);

  return `${max} ${min}`;
}

highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 5");
highAndLow("1 9 3 4 -5");
