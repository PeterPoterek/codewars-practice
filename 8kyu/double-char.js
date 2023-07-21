// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//Solution
function doubleChar(str) {
  let letterArr = str.split("");
  let result = "";

  for (let i = 0; i < letterArr.length; i++) {
    result += letterArr[i] + letterArr[i];
  }

  console.log(result);
  return result;
}

doubleChar("String");
doubleChar("Hello World");
doubleChar("1234!_");
