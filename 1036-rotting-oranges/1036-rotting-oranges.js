/**
 * @param {number[][]} grid
 * @return {number}
 */
 /*
Time-complexity: O(M * N) - even though it is a multi-sourced BFS, we are visiting each cell in the grid at most once, so M = row length and N = column length.
Space-complexity: O(M * N) - the queue we use for BFS can grow up to M * N (size of the grid) in the worse case. The worst case would be a grid filled with all rotten oranges, and so the queue will be initialized with all the cells in te grid.
Use Breadth-First search to see how many minutes minimum would elapse for the oranges that can rot to do so. Keep track of the count of fresh orange so after the queue is empty from iterative BFS, we can see if there is any fresh ones left. If so, return -1 as it is impossible to rot all the oranges.
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const q = [];

    let minutes = 0;
    let fresh = 0; //keep track of number of fresh oranges

    //Find any rotting oranges and add it to the visit Set and q Queue in preparation for BFS.
    //Also count the number of fresh oranges in the grid.
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === 2) {
                q.push([r, c]);
            }
            if(grid[r][c] === 1) {
                fresh += 1;
            }
        }
    }

    /* Breadth First Search: Each iteration of the while loop (q layer(s)) would represent an increment of the rotting time. 
    at minute 0 we are processing the rotting oranges at the beginning of time to find their neighbors.
    Every layer of the breadth first search, we are also checking that we still have fresh oranges*/
    const directions = [[0,1], [0,-1], [1,0], [-1,0]];
    while(q.length !== 0 && fresh > 0) {
        let layerSize = q.length;

        //Going through one unit of time per q layer.
        for(let i = 0; i < layerSize; i++) {
            let [r, c] = q.shift();
            directions.forEach((direction) => {
                let dr = direction[0];
                let dc = direction[1];
                let row = dr + r;
                let col = dc + c;

                //If neighbor orange is not bounds and not fresh, skip this direction
                if(row < 0 || row === rows || col < 0 || col === cols || grid[row][col] !== 1) {
                    return;
                }

                //If it is in bounds and is fresh, make it rot and add it to the q.
                //Fresh count drecremented here.
                grid[row][col] = 2;
                q.push([row, col]);
                fresh -= 1;
            });
        }

        minutes += 1;
    }

    //If we have fresh oranges left that are impossible to rot. Otherwise, return minutes
    if (fresh > 0) return -1;
    return minutes;
};