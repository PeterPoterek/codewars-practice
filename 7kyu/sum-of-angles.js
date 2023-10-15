// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

//Solution
function angle(n) {
  console.log(n > 2 ? (n - 2) * 180 : false);
  return n > 2 ? (n - 2) * 180 : false;
}
angle(3); //180
angle(4); // 360
