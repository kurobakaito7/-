/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;

    if(sLen < pLen) {
        return [];
    }

    const res = [];
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    for(let i=0;i<pLen;i++) {
        sCount[s[i].charCodeAt() - 'a'.charCodeAt()]++;
        pCount[p[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    if(sCount.toString() === pCount.toString()) {
        res.push(0)
    }
    for(let i=0;i<sLen-pLen;i++){
        sCount[s[i].charCodeAt() - 'a'.charCodeAt()]--;
        sCount[s[i+pLen].charCodeAt() - 'a'.charCodeAt()]++;
        if(sCount.toString() === pCount.toString()) {
            res.push(i+1)// 切记+1
        }
    }
    return res;
};