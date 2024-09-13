/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 方法一：字符串分割
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for(let i = 0;i < v1.length||i < v2.length;i++){
        let x = 0,y = 0;
        if(i < v1.length){
            x = parseInt(v1[i]);
        }
        if(i < v2.length){
            y = parseInt(v2[i])
        }
        if(x < y){
            return -1;
        }
        if(x > y){
            return 1;
        }
    }
    return 0;
};
// 方法二：双指针
var compareVersion = function(version1, version2) {
    const n = version1.length;
    const m = version2.length;
    let i = 0,j = 0;
    while(i < n || j < m){
        let x = 0,y = 0;
        for(;i<n&&version1[i] !== '.';i++){
            x = x*10 + (version1[i] - '0');
        }
        i++;// 跳过点号
        for(;j<m&&version2[j] !== '.';j++){
            y = y*10 + (version2[j] - '0');
        }
        j++;// 跳过点号
        if(x !== y){
            return x > y ? 1 : -1;
        }
    }
    return 0;
};