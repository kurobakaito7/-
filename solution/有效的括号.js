/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length %2 === 1) {
        return false;
    }
    const stack = [];
    for(let i = 0;i<s.length;i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }else if(s[i] === ')'){
            let c = stack.pop();
            if(c !== '('){
                return false;
            }
        }else if(s[i] === ']'){
            let c = stack.pop();
            if(c!== '['){
                return false;
            }
        }else if(s[i] === '}'){
            let c = stack.pop();
            if(c!== '{'){
                return false;
            }
        }
    }
    return stack.length === 0;
};

// 哈希表
var isValid = function(s) {
    if(s.length % 2 === 1) return false;
    let stack = [];
    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])
    for(let ch of s) {
        if(map.has(ch)){
            if(!stack.length || map.get(ch) !== stack[stack.length-1]) {
                return false;
            }
            stack.pop()
        }else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
}