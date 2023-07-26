// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//Solution
function getGrade(s1, s2, s3) {
  let sum = s1 + s2 + s3;

  let average = sum / 3;

  if (average >= 90 && average <= 100) {
    console.log("A");
    return "A";
  }
  if (average >= 80 && average <= 90) {
    console.log("B");
    return "B";
  }
  if (average >= 70 && average <= 80) {
    console.log("C");
    return "C";
  }
  if (average >= 60 && average <= 70) {
    console.log("D");
    return "D";
  }
  if (average >= 0 && average < 60) {
    console.log("F");
    return "F";
  }
}
getGrade(95, 90, 93); //A
getGrade(70, 70, 100); //B
getGrade(70, 70, 70); //C
getGrade(65, 70, 59); //D
getGrade(44, 55, 52); //F
