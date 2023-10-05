// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//Solution
function removeUrlAnchor(url) {
  const split = url.split("#");
  console.log(split[0]);
  return split[0];
}
removeUrlAnchor("www.codewars.com#about"); //" www.codewars.com"
removeUrlAnchor("www.codewars.com/katas/?page=1#about"); // 'www.codewars.com/katas/?page=1'
