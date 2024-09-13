/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 排除法
var searchMatrix = function(matrix, target) {
    const n = matrix.length,m = matrix[0].length;
    let i = 0,j=m-1;
    while(i < n && j >= 0) {
        if(matrix[i][j] === target) {
            return true;
        }else if(matrix[i][j] < target) {
            i++; // 这一行剩余元素全部小于 target，排除
        }else {
            j--; // 这一列剩余元素全部大于 target，排除
        }
    }
    return false;
};

// 将二维数组拼成一维数组后进行二分查找
var searchMatrix = function(matrix, target) {
    const n = matrix.length,m = matrix[0].length;
    let left = 0, right = n*m-1;
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        const x = matrix[Math.floor(mid / m)][mid % m];
        if(x === target) {
            return true;
        }else if(x < target) {
            left = mid + 1;
        }else if(x > target) {
            right = mid - 1;
        }
    }
    return false;
};