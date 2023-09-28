// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//Solution
function duplicateCount(text) {
  text = text.toLowerCase();

  const charCounts = {};
  let duplicateCount = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (charCounts[char] === undefined) {
      charCounts[char] = 1;
    } else if (charCounts[char] === 1) {
      charCounts[char]++;
      duplicateCount++;
    }
  }

  return duplicateCount;
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
