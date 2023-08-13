// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//Solution
var filterString = function (value) {
  const result = value
    .split("")
    .filter((char) => {
      return !isNaN(Number(char)) ? true : false;
    })
    .reduce((result, char) => {
      return (result += char);
    });

  console.log(Number(result));
  return Number(result);
};

filterString("123"); // 123
filterString("a1b2c3"); // 123
filterString("aa1bb2cc3dd"); // 123
