// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//Solution
function solution(str, ending) {
  if (ending === "") {
    return true;
  }
  let newString = str.slice(-ending.length);

  console.log(newString === ending);
  return newString === ending;
}

solution("abc", "bc");
solution("abc", "d");
