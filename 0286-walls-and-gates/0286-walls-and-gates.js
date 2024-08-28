/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
 /*
Time-complexity: O(M * N) - Even though we go through the grid a couple times, this is still a linear solution with respect to the grid size M rows and N columns. Once we set a room's distance, we mark it as visited which means each room is visited at most once. 
Space-complexity: O(M * N) - The space complexity depends on how large the queue grows. In the double forloop, we can have an input rooms of all gates, therefore adding all coordinates to visit Set and q Queue.
Solution: we visit all gates and find its neighbouring cells layer by layer, modifying in place the rooms grid to include the distance at each layer. E.g. at a specific gate we have distance 0, at its immediate neighbouring cells we have distance 1, at its neighbours neighbours we have distance 2, etc... We also keep track of visited cells to not visit it again.
 */
var wallsAndGates = function(rooms) {
    const rows = rooms.length;
    const cols = rooms[0].length;

    const visit = new Set();
    const q = [];

    var addRoom = function(row, col) {
        if(row < 0 || row === rows 
          || col < 0 || col === cols
          || visit.has(`${row},${col}`) 
          || rooms[row][col] === -1) {
            return;
        };

        visit.add(`${row},${col}`);
        q.push([row,col]);
    }

    //Find all the gates and add it to visit Set and q Queue in prep for BFS
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(rooms[r][c] === 0) {
                visit.add(`${r},${c}`);                
                q.push([r, c]);
            }
        }
    }

    /* Breadth First Search: Each layer of the queue we set its rooms cells to be the dist from the gate (gate = 0 distance initially)
    After each layer, we increment dist and continue the bfs.
    */
    let dist = 0;
    while(q.length !== 0) {
        let size = q.length; //Current layer size
        for(let i = 0; i < size; i++) {
            let [rw, cl] = q.shift();

            rooms[rw][cl] = dist;

            //Add the four adjacent rooms to the queue in preparation for the next layer/iteration of the while loop.
            addRoom(rw + 1, cl);
            addRoom(rw - 1, cl);
            addRoom(rw, cl + 1);
            addRoom(rw, cl - 1);
        }
        dist += 1;
    }
};