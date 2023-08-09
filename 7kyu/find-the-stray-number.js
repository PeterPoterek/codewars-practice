// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//Solution
function stray(numbers) {
  let stray;
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    stray = numbers[0];
  } else {
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] !== numbers[0]) {
        stray = numbers[i];
        break;
      }
    }
  }

  console.log(stray);
  return stray;
}

stray([1, 1, 2]); // 2
stray([17, 17, 3, 17, 17, 17, 17]); // 3
