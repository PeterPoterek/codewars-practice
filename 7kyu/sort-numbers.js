// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//Solution
function solution(nums) {
  if (nums === null) {
    return [];
  }
  const sortedArr = nums.sort((a, b) => a - b);
  console.log(sortedArr);
  return sortedArr;
}

solution([1, 2, 10, 50, 5]); // [1,2,5,10,50]
solution([20, 2, 10]); // [2,10,20]
solution(null); // []
