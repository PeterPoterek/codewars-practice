// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

//Solution
function past(h, m, s) {
  hoursToMil = 60 * 60 * 1000;
  minToMil = 60 * 1000;
  secToMil = 1000;

  result = h * hoursToMil + m * minToMil + s * secToMil;
  console.log(result);
  return result;
}

past(0, 1, 1); //61000
past(1, 1, 1); //3661000
past(1, 0, 1); //3601000
