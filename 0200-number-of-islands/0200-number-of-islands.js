/**
 * @param {character[][]} grid
 * @return {number}
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