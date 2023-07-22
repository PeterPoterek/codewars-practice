// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//Solution
function solution(str) {
  letterArr = str.split("");

  let result = "";

  for (let i = letterArr.length - 1; i >= 0; i--) {
    result += letterArr[i];
  }

  console.log(result);
  return result;
}

solution("world");
solution("word");
