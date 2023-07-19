// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//Solution
function fakeBin(x) {
  let digitArr = Array.from(String(x), Number);

  for (let i = 0; i < digitArr.length; i++) {
    if (digitArr[i] >= 5) {
      digitArr[i] = "1";
    } else {
      digitArr[i] = "0";
    }
  }

  const result = digitArr.join("");
  console.log(result);
  return result;
}

fakeBin(45385593107843568);
