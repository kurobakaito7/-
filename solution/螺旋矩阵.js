/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length === 0 || matrix[0].length === 0) return []
  const res = [];
  let l = 0,r = matrix[0].length-1,t=0,b=matrix.length-1;
  let x = 0;
  while(true) {
    for(let i=l;i<=r;i++) res[x++] = matrix[t][i]
    if(++t > b) break;
    for(let i=t;i<=b;i++) res[x++] = matrix[i][r]
    if(--r < l) break;
    for(let i=r;i>=l;i--) res[x++] = matrix[b][i]
    if(--b < t) break;
    for(let i=b;i>=t;i--) res[x++] = matrix[i][l]
    if(++l > r) break;
  }
  return res;
}