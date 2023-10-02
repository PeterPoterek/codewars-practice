// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

//Solution
function initializeNames(name) {
  const words = name.split(" ");

  if (words.length === 1) {
    console.log(name);
    return name;
  }
  let secondName = "";
  for (let i = 1; i < words.length - 1; i++) {
    secondName += words[i][0];
  }
  let secondNameChars = secondName.split("").join(". ");
  let initials = "";
  if (secondNameChars !== "") {
    initials = secondNameChars + ". ";
  }

  let result = `${words[0]} ${initials}${words[words.length - 1]}`;
  console.log(result);

  return result;
}
initializeNames("Jack Ryan"); //'Jack Ryan
initializeNames("Lois Mary Lane"); // 'Lois M. Lane
initializeNames("Dimitri"); // 'Dimitri
initializeNames("Alice Betty Catherine Davis"); //'Alice B. C. Davis
