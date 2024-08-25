/**
 * @param {number[][]} grid
 * @return {number}
 */
 /*
Time-complexity: O(M*N) - Worst case is if we traverse every cell in the grid. M = number of rows. N = number of columns. 
Space-complexity: O(M*N) - The grid map can be filled with lands completely, and the BFS queue (where the entire grid is 1 large island) or visit Set can contain every single cell position filling it both up to M*N elements.
Using breadth-first-search, we look at the cells in the grid and consider its adjacent four neighbours. For its neighbours which we have not visited and which is a land (1), we add it to the BFS queue and mark it as visited. 
We go through all four direction neighbours of the current cell we are looking at. We continue to use the single BFS function to go through a single island and its neighbours, incrementing max as we go. For every island mass, 
we compare it to the old max to find the ultimate maximum island size before returning.
 */
var maxAreaOfIsland = function(grid) {
    if(!grid || grid.length === 0) {
        return 0;
    }
    const rows = grid.length;
    const cols = grid[0].length;
    const visit = new Set();

    var bfs = function(r,c) {
        let queue = [];
        visit.add(`${r},${c}`);
        queue.push(`${r},${c}`);

        let islandSize = 1;

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
                && grid[newRow][newCol] === 1
                && !visit.has(`${newRow},${newCol}`)) {
                    queue.push(`${newRow},${newCol}`);
                    visit.add(`${newRow},${newCol}`);

                    islandSize++;
                }
            }
        }
        return islandSize;
    }
    let max = 0;
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === 1 && !visit.has(`${r},${c}`)) {
                max = Math.max(bfs(r,c), max);
            }
        }
    }
    return max;
};