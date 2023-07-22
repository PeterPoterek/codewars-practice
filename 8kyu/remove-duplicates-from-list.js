// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

//Solution
function distinct(a) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (a[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(a[i]);
    }
  }

  console.log(result);
  return result;
}

distinct([1]);
distinct([1, 2]);
distinct([1, 1, 2]);
