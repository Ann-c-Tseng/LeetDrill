/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

 /*
Time-complexity: O(M * N) - Going through the board cells at most once in each of the three phases.
Space-complexity: O(1) - modifying board in place.
Depth-First Search: 1. Capture the regions that are connected to the boarder and mark them as T using depth first search. 
2. Then for all left over regions that are Os, we know they are not boarder regions and can be captured into Xs. 
3. Convert any T cells which represent boarder regions into Os.
 */
var solve = function(board) {
    const rows = board.length;
    const cols = board[0].length;

    var dfsCapture = function(r, c) {
        if(r < 0 || c < 0
        || r === rows || c === cols 
        || board[r][c] !== "O") {
            return;
        }
        
        board[r][c] = "T";

        dfsCapture(r+1, c);
        dfsCapture(r-1, c);
        dfsCapture(r, c+1);
        dfsCapture(r, c-1);
    }

    //DFS - Capture unsurrounded regions connected to the boarder (O -> T)
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(board[i][j] === "O" && 
               (i === 0 || i === rows - 1 ||
               j === 0 || j === cols - 1)
            ) {
                dfsCapture(i, j);
            }
        }
    }

    //Capture the surrounded regions (O -> X)
    for(let k = 0; k < rows; k++) {
        for(let l = 0; l < cols; l++) {
            if(board[k][l] === "O") {
                board[k][l] = "X";
            }
        }
    }

    //Uncapture unsurrounded regions (T -> O)
    for(let k = 0; k < rows; k++) {
        for(let l = 0; l < cols; l++) {
            if(board[k][l] === "T") {
                board[k][l] = "O";
            }
        }
    }
};

 /*
Time-complexity: O(M * N)
Space-complexity:
Breadth-First Search:
 */
 /*
var solve = function(board) {
    const rows = board.length;
    const cols = board[0].length;




};
*/