/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 /*
Time-complexity: O(M * N) - Each cell is visited once in the dfs.
Space-complexity: O(M * N) - Each set can have in the worst case all the cells in the grid.
Another way to think of this problem is to consider the 0th row and 0th column being closest to the pacific ocean, and the last row and the last column being closest to the atlantic ocean. Every cell that can reach those rows are greater than the cell values in those rows for the rain to enter the oceans. We can use dfs from the 0th and last row and traverse the graph to find the cells that acn reach the pacific, the cells that can reach the atlantic. And then cells in both sets is our solution set.
 */
var pacificAtlantic = function(heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    const pacific = new Set();
    const atlantic = new Set();

    var dfs = function(r, c, visit, prevHeight) {
        if(visit.has(`${r},${c}`) || r < 0 || c < 0 
        || r === rows || c === cols
        || heights[r][c] < prevHeight) {
            return;
        }

        visit.add(`${r},${c}`); 
        dfs(r+1, c, visit, heights[r][c]);
        dfs(r-1, c, visit, heights[r][c]);
        dfs(r, c+1, visit, heights[r][c]);
        dfs(r, c-1, visit, heights[r][c]);
    }

    for(let c = 0; c < cols; c++) {
        dfs(0, c, pacific, heights[0][c]);
        dfs(rows - 1, c, atlantic, heights[rows - 1][c])
    }

    for(let r = 0; r < rows; r++) {
        dfs(r, 0, pacific, heights[r][0]);
        dfs(r, cols-1, atlantic, heights[r][cols-1]);
    }

    const result = []
    for(let rw = 0; rw < rows; rw++) {
        for(let cl = 0; cl < cols; cl++) {
            if(pacific.has(`${rw},${cl}`) && atlantic.has(`${rw},${cl}`)) {
                result.push([rw,cl]);
            }
        }
    }

    return result;
};