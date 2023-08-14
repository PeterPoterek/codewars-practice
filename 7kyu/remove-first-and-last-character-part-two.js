// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

//Solution
function array(string) {
  const charArr = string.split(",");
  let result = "";

  if (charArr.length <= 2) {
    return null;
  }

  for (let i = 0; i < charArr.length; i++) {
    if (i !== 0 && i !== charArr.length - 1) {
      result += charArr[i];
      if (i !== charArr.length - 2) {
        result += " "; // Add a space between sequences except the last one
      }
    }
  }

  console.log(result);
  return result;
}
array("1,2,3"); //2;
array("1,2,3,4"); //2 3;
