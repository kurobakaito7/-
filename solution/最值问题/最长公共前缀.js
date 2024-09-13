/**
 * @param {string[]} strs
 * @return {string}
 */
// 横向扫描
var longestCommonPrefix = function(strs) {
    if(strs == null || strs.length === 0) {
        return "";
    }
    let prefix = strs[0];
    let count = strs.length;
    for(let i =1;i<count;i++) {
        prefix = longest_common_prefix(prefix,strs[i]);
        if(prefix.length === 0){
            break;
        }
    }
    return prefix;
};
function longest_common_prefix(str1,str2) {
    let length = Math.min(str1.length,str2.length);
    let index = 0;
    while(index < length && str1.charAt(index) === str2.charAt(index)) {
        index++;
    }
    return str1.substring(0, index);
}

// 纵向比较
var longestCommonPrefix = function(strs) {
    if(strs == null || strs.length === 0) {
        return "";
    }
    let length = strs[0].length;
    let count = strs.length;
    for(let i = 0;i<length;i++) {
        let c = strs[0].charAt(i);
        for(let j = 1;j<count;j++) {
            if(i === strs[j].length || strs[j].charAt(i) !== c){
                return strs[0].substring(0,i);
            }
        }
    }
    return strs[0];
};