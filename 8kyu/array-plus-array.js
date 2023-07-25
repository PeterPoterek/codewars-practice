// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// //Solution
function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }

  for (let j = 0; j < arr2.length; j++) {
    sum2 += arr2[j];
  }

  console.log(sum1 + sum2);
  return sum1 + sum2;
}

arrayPlusArray([1, 2, 3], [4, 5, 6]); // 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]); // -21
arrayPlusArray([0, 0, 0], [4, 5, 6]); // 15
arrayPlusArray([100, 200, 300], [400, 500, 600]); // 2100
