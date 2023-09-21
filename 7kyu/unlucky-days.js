// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

//Solution
function unluckyDays(year) {
  let blackFridayCount = 0;

  for (let month = 1; month <= 12; month++) {
    const date = new Date(year, month - 1, 13);

    if (date.getDay() === 5) {
      blackFridayCount++;
    }
  }

  console.log(blackFridayCount);
  return blackFridayCount;
}
