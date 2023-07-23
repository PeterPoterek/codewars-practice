// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//Solution
function longest(s1, s2) {
  // combite both strings
  //  sort
  // iterate over sorrtedArr
  // check if curr letter !== prev letter
  // if curr letter ! == prev letter add that letter to result string
  // return result

  let combinedString = s1 + s2;
  let sortedString = combinedString.split("").sort().join("");

  let result = "";
  for (let i = 0; i < sortedString.length; i++) {
    if (sortedString[i] !== sortedString[i - 1]) {
      result += sortedString[i];
    }
  }

  console.log(result);
  return result;
}

longest("aretheyhere", "yestheyarehere");
longest("loopingisfunbutdangerous", "lessdangerousthancoding");
longest("inmanylanguages", "theresapairoffunctions");
