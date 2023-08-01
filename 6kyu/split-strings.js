// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//Solution
function solution(str) {
  let result = [];
  let item = "";
  for (let i = 0; i < str.length; i = i + 2) {
    item = str.charAt(i) + str.charAt(i + 1);
    result.push(item);
  }

  if (str.length % 2 !== 0) {
    result[result.length - 1] += "_";
  }

  console.log(result);
  return result;
}

solution("abcdef"); //["ab", "cd", "ef"]
solution("abcdefg"); //["ab", "cd", "ef", "g_"]
solution(""); //[]
