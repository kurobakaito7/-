/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (grid == null || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let row = grid.length,
    column = grid[0].length;
  let dp = new Array(row).fill(0).map(() => new Array(column).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < column; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[row - 1][column - 1];
};

// 优化：无需建立dp矩阵，直接遍历grid即可
var minPathSum = function (grid) {
  if (grid == null || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let row = grid.length,
    column = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i === 0 && j === 0) continue;
      else if (i === 0) grid[i][j] = grid[i][j - 1] + grid[i][j];
      else if (j === 0) grid[i][j] = grid[i - 1][j] + grid[i][j];
      else grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }
  return grid[row - 1][column - 1];
};
