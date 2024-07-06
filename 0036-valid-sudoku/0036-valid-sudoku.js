/**
 * @param {character[][]} board
 * @return {boolean}
 */

 /*  
Time complexity: O(ROWS * COLS). Go through each value in the grid once,
checking whether or not it satisfies the three conditions.
 */
var isValidSudoku = function(board) {
    //We are initializing each row, cols, and boxes array with 9 distinct Set objects.
    //Sets track unique values + Set.has() is O(1)
    //we create an array of length 9, populate each spot in the array with the value null, and for each of those null positions create an empty Set object.
    //The Set object will be used to track unique values encountered in the sudoku board's  9 rows, 9 columns, and 9 3x3 boxes.
    var rows = new Array(9).fill(null).map(() => new Set());
    var cols = new Array(9).fill(null).map(() => new Set());
    var boxes = new Array(9).fill(null).map(() => new Set());

    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            let num = board[i][j];
            if(num === '.') continue; //skip spots without value

            //Math.floor(i/3) - get row index of subgrid (group row index into groups of 3)
            //Either subgroup row 0, 1, or 2
            //Math.floor(j/3) - get column index of subgrid (group col index into groups of 3)
            //Either subgroup col 0, 1, or 2
            //Why * 3? We are ensuring here that the row and col subgroup falls into one of 9
            //boxIndex (0...8). E.g. cell(0,0) is in boxIndex 0, cell(8,8) is in boxIndex 8
            let boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3);

            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;   
}