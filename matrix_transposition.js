// const transpose = function (matrix) {
//   let resultMatrix = [];
//   for (let i = 0; i < matrix[0].length; i++) {
//     let newRow = []
//     for (let j = 0; j < matrix.length; j++) {
//       newRow.push(matrix[j][i]);
//     }
//     if (!(newRow.length === 0)) {
//       resultMatrix.push(newRow);
//     }
//   }
//   return resultMatrix;
// };

// // // Do not edit this function.
// const printMatrix = (matrix) => {
//   for (const row of matrix) {
//     for (const el of row) {
//       process.stdout.write(el + " ");
//     }
//     process.stdout.write('\n')
//   }
// }

// console.log("test 1")
// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

// console.log("test 2")
// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));



// //1 
// // 2 
// // 3 
// // 4 
// // 5 
// // 6 
// // 7

// // transpose([
// //   [1, 2, 3, 4],
// //   [1, 2, 3, 4],
// //   [1, 2, 3, 4],
// //   [1, 2, 3, 4]
// // ])

// // Expected output:
// // 1 1 1 1 
// // 2 2 2 2 
// // 3 3 3 3 
// // 4 4 4 4
// console.log("test 3")
// printMatrix(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));

// console.log('----')


// console.log('----')




// ----
// 1 3 5 
// 2 4 6
// ----

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