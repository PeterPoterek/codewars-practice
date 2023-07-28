// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//Solution
function XO(str) {
  let letterArr = str.toLowerCase().split("");

  let ocount = 0;
  let xcount = 0;
  for (let i = 0; i < letterArr.length; i++) {
    if (letterArr[i] === "o") {
      ocount++;
    }
    if (letterArr[i] === "x") {
      xcount++;
    }
  }

  console.log(ocount === xcount);
  return ocount === xcount;
}

XO("xo"); //true
XO("xxOo"); //true
XO("xxxm"); //false
XO("Oo"); //false
XO("ooom"); //false
