// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//Solution
function getAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  let average = sum / marks.length;

  console.log(Math.floor(average));
  return Math.floor(average);
}

getAverage([2, 2, 2, 2]); //2
getAverage([1, 2, 3, 4, 5]); //3
getAverage([1, 1, 1, 1, 1, 1, 1, 2]); //1
