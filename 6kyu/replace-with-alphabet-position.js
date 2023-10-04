function alphabetPosition(text) {
  const letters = text.toLowerCase().split("");
  const letterRegex = /^[a-zA-Z]$/;

  const alphabetIndexMap = {};

  let result = "";

  const filteredLetters = letters.filter((letter) => {
    return letterRegex.test(letter);
  });

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i);
    alphabetIndexMap[letter] = i + 1;
  }

  const alphabet = Object.entries(alphabetIndexMap);

  for (let i = 0; i < filteredLetters.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (alphabet[j][0] === filteredLetters[i]) {
        result += alphabet[j][1] + " ";
        break;
      }
    }
  }

  console.log(result.trim());
  return result.trim();
}

alphabetPosition("The sunset sets at twelve o' clock."); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
