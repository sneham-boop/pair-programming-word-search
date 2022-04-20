const { transpose } = require("./matrix_transposition");

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  const fullArray = horizontalJoin.concat(verticalJoin);
  for (l of fullArray) {
    if (l.includes(word)) return true;
  }
  

  return false;
};

module.exports = wordSearch;
