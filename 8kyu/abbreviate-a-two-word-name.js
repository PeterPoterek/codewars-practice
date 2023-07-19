// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//Solution
function abbrevName(name) {
  let result = name.toUpperCase();
  let [firstName, lastName] = result.split(" ");

  result = `${firstName[0]}.${lastName[0]}`;
  console.log(result);
  return result;
}

abbrevName("Sam Harris");
