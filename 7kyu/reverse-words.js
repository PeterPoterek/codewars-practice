// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//Solution
function reverseWords(str) {
  const wordArr = str.split(" ");
  let letterArr = [];
  let reverseWord = "";

  for (let i = 0; i < wordArr.length; i++) {
    letterArr = wordArr[i].split("");
    for (let j = letterArr.length - 1; j >= 0; j--) {
      reverseWord += letterArr[j];
    }

    if (i !== wordArr.length - 1) {
      reverseWord += " ";
    }
  }
  console.log(reverseWord);
  return reverseWord;
}
reverseWords("This is an example!"); //"sihT si na !elpmaxe"
reverseWords("double  spaces"); //"elbuod  secaps"
reverseWords("The quick brown fox jumps over the lazy dog."); //'ehT kciuq nworb xof spmuj revo eht yzal .god'
