/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let str = s.trimStart();
    let res = 0;
    let c,t = 0;
    if(str.charAt(0) === '-'){
        c = -1;
        t = 1;
    }else if(str.charAt(0) === '+'){
        c = 1;
        t = 1;
    }else if(str.charAt(0) < '0' || str.charAt(0) > '9'){
        return 0;
    }else{
        c = 1;
    }
    for(let i = t;i<str.length;i++){
        if(str.charAt(i) >= '0'&& str.charAt(i)<= '9'){
            let num = str.charAt(i) - '0';
            res = res*10 + num;
        }else{
            break;
        }
    }
    if(c === -1){
        res = Math.min(res,-Math.pow(-2,31));
    }else if(c === 1){
        res = Math.min(res,Math.pow(2,31) - 1);
    }
    return res*c;
};