// 洗牌算法
function shuffleArray(array) {
  for(let i=array.length-1;i>0;i--) {
    // 生成一个0到i（包含i）的随机索引
    const j = Math.floor(Math.random() * (i+1));
    // 交换当前元素与随机索引位置的元素
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(shuffleArray(arr))
