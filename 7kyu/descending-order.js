// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//Solution
function descendingOrder(n) {
  let str = n.toString();
  let characters = str.split("");
  let digits = characters.map((char) => parseInt(char));

  let sortedDigits = digits.sort(function (a, b) {
    return b - a;
  });

  let sortedStr = sortedDigits.join("");
  let sortedNumber = parseInt(sortedStr);

  console.log(sortedNumber);
  return sortedNumber;
}

descendingOrder(42145);
