/**
 * @param {character[][]} grid
 * @return {number}
 */
 /*
Time-Complexity: O(M*N) - Worst case is if we traverse the entire grid for every cell. M = number of rows. N = number of columns
Space-Complexity: O(M*N) - The grid map can be filled with lands and DFS goes M*N deep
Using breadth-first search, we can look at a single row column positon and iterate checking it's adjacent cells. If its adjacent cells are in bounds of the board, is a "1", and has not been visited, we can safely add it to our bfs (iterative) queue and add it to our set as a template literal string/tuple. After we search through all the cells of a single island, we exit a bfs recursive call to increment our island count. Return final island count.
 */
var numIslands = function(grid) {
    if(!grid || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    const visit = new Set();
    let islands = 0;

    var bfs = function(r,c) {
        let queue = [];
        visit.add(`${r},${c}`);
        queue.push(`${r},${c}`);

        //Expand the island if queue is not empty
        while(queue.length > 0) {
            let position = queue.shift();
            position = position.split(",");
            let row = parseInt(position[0]);
            let col = parseInt(position[1]);

            const directions = [[1,0], [-1,0], [0,1], [0,-1]];

            for(let i = 0; i < directions.length; i++) {
                let dr = directions[i][0];
                let dc = directions[i][1];
                let newRow = row+dr;
                let newCol = col+dc;

                if(newRow >= 0 
                && newCol >= 0 
                && newRow < rows 
                && newCol < cols 
                && grid[newRow][newCol] === "1" 
                && !visit.has(`${newRow},${newCol}`)) {
                    queue.push(`${newRow},${newCol}`);
                    visit.add(`${newRow},${newCol}`);
                }
            }
        }
    }

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === "1" && !visit.has(`${r},${c}`)) {
                bfs(r,c);
                islands += 1;
            }
        }
    }
    return islands;
};