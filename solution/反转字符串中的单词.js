/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    str = s.trim()// trim 不会修改原来的字符串
    
    arr = str.split(' ')
    let res = ''
    for(let i = arr.length - 1;i>0;i--){
        if(arr[i] !== ''){// 注意这里是''而不是' '
            res += arr[i]
            res += ' ' 
        }
    }
    res += arr[0]
    return res
};