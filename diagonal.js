const generateBoard = function (whiteQueen, blackQueen) {
  let size = 8;
  let board = [];

  for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
      board[i][j] = 0;
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        (i === whiteQueen[0] && j === whiteQueen[1]) ||
        (i === blackQueen[0] && j === blackQueen[1])
      ) {
        board[i][j] = 1;
      }
    }
  }
  
  return board;
};

const queenThreat = function (board) {
  let threat = false;
  let pieces = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        pieces.push([i, j]);
      }
    }
  }

  console.log(pieces)

  let [[x1, y1], [x2, y2]] = pieces;
  if (x1 === x2 || y1 === y2 || Math.abs((y2 - y1) / (x2 - x1)) === 1) {
    threat = true;
  }

  return threat;
};

queenThreat([
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
])
