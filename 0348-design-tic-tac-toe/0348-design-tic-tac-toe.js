/**
 * @param {number} n
 */

class TicTacToe {
    constructor(n) {
        this.boardSideLength = n;
        //Create a way to store row and column for checking in move function
        this.rowMap = new Map();
        for(let i = 0; i < n; i++) {
            this.rowMap.set(i, [0,0]); //[player1 count, player2 count]
        }
        this.colMap = new Map();
        for(let j = 0; j < n; j++) {
            this.colMap.set(j, [0,0]);
        }

        //Only one diagonal and one antiDiagonal per board. 
        this.diagonal = [0,0]
        this.antiDiagonal = [0,0]
    }

    /** 
    * @param {number} row 
    * @param {number} col 
    * @param {number} player
    * @return {number}
    */
    move(row, col, player) {
        //Place the move first. A move is guaranteed to be valid and is placed on an empty block.
        const playerIdx = player-1; //[player1 count, player2 count]
        const rMapPair = this.rowMap.get(row);
        const cMapPair = this.colMap.get(col);
        rMapPair[playerIdx] = rMapPair[playerIdx] + 1;
        cMapPair[playerIdx] = cMapPair[playerIdx] + 1;

        this.rowMap.set(row, rMapPair);
        this.colMap.set(col, cMapPair);

        //Update diagonal count if needed:
        //Diagonal coordinates have row and col equal.
        if(row === col) {
            this.diagonal[playerIdx] = this.diagonal[playerIdx] + 1;
        }

        //Update antidiagonal count if needed:
        //Notice Antidiagonal coordinates have the formula: col = n - row - 1
        if((this.boardSideLength - row - 1) === col) {
            this.antiDiagonal[playerIdx] = this.antiDiagonal[playerIdx] + 1;
        }

        //Check row. We know move is always valid. We only have to check if they placed n of their marks in a horiz, vert, or diag.
        if(this.rowMap.get(row)[playerIdx] === this.boardSideLength) {
            return player;
        }
        //Check column
        if(this.colMap.get(col)[playerIdx] === this.boardSideLength) {
            return player;
        }

        //Check diagonal

        if(this.diagonal[playerIdx] === this.boardSideLength) {
            return player;
        }

        //Check antidiagonal
        if(this.antiDiagonal[playerIdx] === this.boardSideLength) {
            return player;
        }

        return 0;
    }
}

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */