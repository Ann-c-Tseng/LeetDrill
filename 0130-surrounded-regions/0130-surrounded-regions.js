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
 /*
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

    //1. DFS - Capture unsurrounded regions connected to the boarder (O -> T)
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

    //2. Capture the surrounded regions (O -> X)
    for(let k = 0; k < rows; k++) {
        for(let l = 0; l < cols; l++) {
            if(board[k][l] === "O") {
                board[k][l] = "X";
            }
        }
    }

    //3. Uncapture unsurrounded regions (T -> O)
    for(let k = 0; k < rows; k++) {
        for(let l = 0; l < cols; l++) {
            if(board[k][l] === "T") {
                board[k][l] = "O";
            }
        }
    }
};
*/

 /*
Time-complexity: O(M * N) - For all three phases, we visit each cell at most once.
Space-complexity: O(M * N) 
Breadth-First Search: 1. Use queue to explore all O cells connected to the border and make it T.
2. Then for all left over regions with Os, we know they are not boarder regions and can be captured into Xs. 
3. Convert any T cells which represent boarder regions into Os.
 */
var solve = function(board) {
    if(board === null || board.length === 0) {
        return;
    }

    const rows = board.length;
    const cols = board[0].length;

    var bfsCapture = function(r, c) {
        const q = [];
        q.push([r, c]);
        board[r][c] = 'T';

        const directions = [[-1,0], [1,0], [0,-1], [0,1]];

        while(q.length > 0) {
            const [x,y] = q.shift();
            
            for(const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                //If neighbor is within bounds and is an "O", we can push it to the queue and set it to T.
                if(newX >= 0 && newX < rows && newY >= 0 && newY < cols && board[newX][newY] === "O") {
                    q.push([newX, newY]);
                    board[newX][newY] = "T";
                }
            }
        }
    }

    //1. BFS: Capture all regions connected to the border (O -> T)
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(board[i][j] === 'O' && (i === 0 || i === rows - 1 || j === 0 || j === cols - 1)) {
                bfsCapture(i, j);
            }
        }
    }

    //2. For all nonboarder regions, flip those Os to Xs.
    //3. Flip all the Ts (border regions) back to Os
    for(let k = 0; k < rows; k++) {
        for(let l = 0; l < cols; l++) {
            if(board[k][l] === "O") {
                board[k][l] = "X";
            }
            if(board[k][l] === "T") {
                board[k][l] = "O";
            }
        }
    }
};
