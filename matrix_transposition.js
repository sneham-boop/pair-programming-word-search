const transpose = function(matrix) {
  const result = [];
  matrix[0].forEach(_ => {
    result.push([]); // [[],[],[],[]]
  });

  
  result.forEach((_, i) => {
    matrix.forEach(row => {
      result[i].push(row[i]);
    });
  });

  return result;
};

module.exports = {
  transpose
}