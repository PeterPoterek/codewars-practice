// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Solution
function removeExclamationMarks(s) {
  let letterArr = s.split("");
  let newWord = "";
  for (let i = 0; i < letterArr.length; i++) {
    if (letterArr[i] !== "!") {
      newWord += letterArr[i];
    }
  }

  console.log(newWord);
  return newWord;
}

removeExclamationMarks("Hello World!"); // "Hello World"
