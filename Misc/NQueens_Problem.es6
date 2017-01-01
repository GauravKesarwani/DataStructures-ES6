/* N Queens Problem. Recursion & backtracking */

const winston = require('winston');
'use strict';

class NQueensProblem {

  constructor(board, N) {
    this.board = board;
    this.N = N;
  }
  // you need some way to control the recursion 

  solveNQueensUtil(col) {
    // base case - all the queens have been placed then return true 
    if (col >= N) {
      return true;
    }

    // for this col try placing the queen in all the rows one by one 
    for (let row = 0; row < this.N; row++) {
      // check if the queen can be placed on board
      if (this.isSafe(this.board, row, col)) {
        this.board[row][col] = 1;
        if(!this.solveNQueensUtil(this.board, col+1)) {
          this.board[row][col] = 0;    //backtracking step
        }
        else {
          return true;
        }
      }
    }

    return false;
  }

  isSafe(board, row, col) {
    // if the queen is on current row then return false
    for (let i = 0; i < col; i++) {
      if (board[row][i] === 1) {
        return false;
      }
    }

    // check the diagonal positions 
    while(row >=0 && col >=0) {
      if (board[row][col] === 1) {
        return false;
      }
      row--; col--;
    }

    while(row <= N && col >=0) {
      if(board[row][col] ===1) {
        return false;
      }
      row++; col--;
    }

    return true;
  }
}

const board = 
  [ 
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0] 
  ];

const N = 4;
const nQueens = new NQueensProblem(board, N);
if (nQueens.solveNQueensUtil(0) === false) {
  winston.info('Solution does not exist to N Queens Problem');
} 
else {
  winston.info(board);
}
// Before placing a queen check for all the safe positions //

