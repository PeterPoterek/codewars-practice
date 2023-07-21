// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//Solution
function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }

  console.log(result);
  return result;
}

repeatStr(6, "I");
repeatStr(5, "Hello");
