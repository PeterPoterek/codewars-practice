// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//Solution
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

simpleMultiplication(2); // 16
simpleMultiplication(1); // 9
simpleMultiplication(8); // 64
