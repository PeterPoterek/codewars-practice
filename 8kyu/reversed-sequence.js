// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//Solution
const reverseSeq = (n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }

  console.log(result);
  return result;
};

reverseSeq(5); // [5, 4, 3, 2, 1]