// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

//Solution
function otherAngle(a, b) {
  console.log(180 - (a + b));
  return 180 - (a + b);
}
otherAngle(30, 60); //90
otherAngle(60, 60); //60
otherAngle(43, 78); //59
otherAngle(10, 20); //150
