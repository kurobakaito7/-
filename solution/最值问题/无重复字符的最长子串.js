/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为0，相当于在字符串的最左边
    let rk = 0,ans = 0;
    for(let i = 0;i<n;i++){
        // i表示的是左指针
        if(i != 0){
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while(rk < n && !occ.has(s.charAt(rk))){
            occ.add(s.charAt(rk));
            // 不断移动右指针
            rk++;
        }
        // 第i到rk个字符就是一个极长的无重复字符串
        ans = Math.max(ans,rk - i);
    }
    return ans;
    
};