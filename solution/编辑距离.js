/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = Array.from(Array(word1.length + 1),() => Array(word2.length + 1).fill(0));

    // 初始化
    for(let i = 0;i <= word1.length; i++){
        dp[i][0] = i; //  word1[i] 变成 word2[0], 删掉 word1[i], 需要 i 部操作
    }
    for(let j = 0;j <= word2.length;j++) {
        dp[0][j] = j; // word1[0] 变成 word2[j], 插入 word1[j]，需要 j 部操作
    }
    for(let i = 1;i<=word1.length;i++){
        for(let j = 1;j<=word2.length;j++){
            // 因为dp数组有效位从1开始
            // 所以当前遍历到的字符串的位置为i-1|j-1
            if(word1[i - 1] === word2[j - 1]){
                // 不做任何操作
                dp[i][j] = dp[i - 1][j - 1]
            }else{
                // word1删除一个元素->dp[i - 1][j] + 1
                // word2删除一个元素->dp[i][j - 1] + 1
                // 替换元素->dp[i - 1][j - 1] + 1
                dp[i][j] = Math.min(dp[i - 1][j - 1],dp[i][j - 1],dp[i - 1][j]) + 1;
            }
        }
    }
    return dp[word1.length][word2.length];
};