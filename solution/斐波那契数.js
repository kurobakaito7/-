/**
 * @param {number} n
 * @return {number}
 */
// 直接递归
var fib = function(n) {
    if(n === 0){
        return 0
    }
    if(n === 1 || n === 2){
        return 1;
    }
    return (fib(n - 1)+fib(n - 2))%(1e9+7);
};
// 滚动数组
var fib = function(n) {
    const MOD = 1e9+7;
    if( n < 2){
        return n;
    }
    let q = 0,p = 0,r = 1;
    for(let i = 2;i <= n;i++){
        q = p;
        p = r;
        r = (q + p)%MOD;
    }
    return r;
};
// 矩阵快速幂
var fib = function(n) {
    if(n < 2){
        return n;
    }
    //定义底数
    let base = [[1,1],[1,0]];
    let power = n - 1;
    let ans = pow(base,power);
    return ans[0][0]
}
//定义函数，求底数为base，幂次为power的结果
function pow(base,power){
    // 定义变量，存储计算结果
    let res = [[1,0],[0,1]];
    // 对幂一直进行整除
    while(power > 0){
        // 如果为奇数
        if((power & 1) === 1){
            res = mul(res,base)
        }
        power = power >> 1;
        base = mul(base,base)
    }
    return res;
}

// 定义函数，求二维矩阵；两矩阵a，b的乘积
function mul(a,b){
    const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
    for(let i = 0;i < 2;i++){
        for(let j = 0;j < 2;j++){
            c[i][j] = (BigInt(a[i][0])*BigInt(b[0][j]) + BigInt(a[i][1])*BigInt(b[1][j]))%BigInt(1000000007);
        }
    }
    return c;
}