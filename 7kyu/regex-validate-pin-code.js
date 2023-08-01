// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//Solution
function validatePIN(pin) {
  if (pin.length === 6 || pin.length === 4) {
    let filterArr = pin.split("").filter((char) => !isNaN(parseInt(char, 10)));
    if (filterArr.length === pin.length) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  } else {
    console.log(false);
    return false;
  }
}

validatePIN("1234"); //true
validatePIN("12345"); //false
validatePIN("a234"); //false
validatePIN("-1234"); //false
validatePIN("-1.234"); //false
