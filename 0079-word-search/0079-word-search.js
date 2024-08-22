/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 /*
    Time-complexity: O(4^Word.length*N*M) - O(N*M) as we are calling dfs for every letter in the board, and each dfs call can have a call stack of maximum Word.length deep. Each dfs call in the stack has four branches for adjacent positions.
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const pathSet = new Set();

    var dfs = function(r, c, i) {
        if(i === word.length) {
            return true;
        }

        //Check if row or column is out of bounds, 
        //if the character we view is not the current character i in word, 
        //or if we are revisiting an old position in the path
        if(r < 0 || c < 0 
        || r >= rows || c >= cols 
        || word[i] !== board[r][c]
        || pathSet.has(`${r},${c}`)) { //Use string reference here to avoid obj ref issues
            return false;
        }

        pathSet.add(`${r},${c}`);

        //Continue dfs recursively in all four adjacent positions around the current character position
        //Looking for the next character i+1
        const res = (dfs(r+1, c, i + 1) ||
               dfs(r-1, c, i + 1) ||
               dfs(r, c+1, i + 1) ||
               dfs(r, c-1, i + 1));
        pathSet.delete(`${r},${c}`);
        return res;
    }

    //For every single position, run the dfs.
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(dfs(r, c, 0)) return true;
        }
    }

    return false;
};