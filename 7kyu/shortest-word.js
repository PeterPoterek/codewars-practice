// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//Solution
function findShort(s) {
  let wordArr = s.split(" ");

  let shortest = wordArr[0];

  for (let i = 0; i < wordArr.length; i++) {
    if (shortest.length > wordArr[i].length) {
      shortest = wordArr[i];
    }
  }

  console.log(shortest.length);
  return shortest.length;
}

findShort("bitcoin take over the world maybe who knows perhaps"); //3
findShort("turns out random test cases are easier than writing out basic ones"); //3
findShort("Let's travel abroad shall we"); //2
