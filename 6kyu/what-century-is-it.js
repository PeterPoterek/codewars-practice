// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

//Solution
function whatCentury(year) {
  let century = Math.ceil(year / 100);
  let suffix;

  if (century === 11 || century === 12 || century === 13) {
    suffix = "th";
  } else {
    let lastDigit = century % 10;
    if (lastDigit === 1) {
      suffix = "st";
    } else if (lastDigit === 2) {
      suffix = "nd";
    } else if (lastDigit === 3) {
      suffix = "rd";
    } else {
      suffix = "th";
    }
  }

  console.log(`${century}${suffix}`);
  return `${century}${suffix}`;
}

whatCentury("1999");
whatCentury("2011");
whatCentury("2154");
whatCentury("1234");
