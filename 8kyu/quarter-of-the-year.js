// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

//Solution
const quarterOf = (month) => {
  if (month >= 1 && month <= 3) {
    console.log(1);
    return 1;
  }
  if (month >= 4 && month <= 6) {
    console.log(2);
    return 2;
  }
  if (month >= 7 && month <= 9) {
    console.log(3);
    return 3;
  }
  if (month >= 8 && month <= 12) {
    console.log(4);
    return 4;
  }
};

quarterOf(3); // 1
quarterOf(8); // 3
quarterOf(11); // 4
