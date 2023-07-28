// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//Solution
const toJadenCase = (str) => {
  const wordArr = str.split(" ");
  let result = "";
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
    result += wordArr[i] + " ";
  }

  console.log(result);
  return result;
};

toJadenCase("How can mirrors be real if our eyes aren't real");
