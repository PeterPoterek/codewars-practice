// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

//Solution
function vowel2index(str) {
  const letterArr = str.split("");
  let result = "";
  for (let i = 0; i < letterArr.length; i++) {
    if (letterArr[i].toLowerCase() === "a") {
      letterArr[i] = i + 1;
    } else if (letterArr[i].toLowerCase() === "e") {
      letterArr[i] = i + 1;
    } else if (letterArr[i].toLowerCase() === "i") {
      letterArr[i] = i + 1;
    } else if (letterArr[i].toLowerCase() === "o") {
      letterArr[i] = i + 1;
    } else if (letterArr[i].toLowerCase() === "u") {
      letterArr[i] = i + 1;
    }

    result += letterArr[i];
  }

  console.log(result);
  return result;
}

vowel2index("this is my string"); // "th3s 6s my str15ng"
vowel2index("Codewars is the best site in the world"); // "C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld"
vowel2index("Tomorrow is going to be raining"); // "T2m4rr7w 10s g1415ng t20 b23 r2627n29ng"
