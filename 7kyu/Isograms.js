// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//Solution
function isIsogram(str) {
  if (str === "") {
    return true;
  }

  let letterArr = str.toLowerCase().split("");

  for (let i = 0; i < letterArr.length; i++) {
    for (let j = i + 1; j < letterArr.length; j++) {
      if (letterArr[i] === letterArr[j]) {
        console.log(false);
        return false;
      }
    }
  }

  console.log(true);
  return true;
}

isIsogram("Dermatoglyphics");
isIsogram("moose");
isIsogram("aba");
