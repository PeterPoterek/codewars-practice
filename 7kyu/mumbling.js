// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//Solution
function accum(s) {
  let letterArr = s.split("");
  let result = letterArr[0].toUpperCase();
  for (let i = 1; i < letterArr.length; i++) {
    result += "-";
    result += letterArr[i].toUpperCase() + letterArr[i].toLowerCase().repeat(i);
  }
  console.log(result);
  return result;
}

accum("abcd"); //A-Bb-Ccc-Dddd
accum("RqaEzty"); //R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
accum("cwAt"); //C-Ww-Aaa-Tttt
