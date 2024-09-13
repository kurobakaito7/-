/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let area = 0
    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            if(grid[i][j] === 1){
                area = Math.max(area,getArea(grid,i,j));
            }
        }
    }
    return area;
};

function getArea(grid,r,c){
    if(r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] !== 1){
        return 0;
    }
    grid[r][c] = 2;
    return 1 + getArea(grid,r-1,c) + getArea(grid,r,c-1) + getArea(grid,r+1,c) + getArea(grid,r,c+1);
}