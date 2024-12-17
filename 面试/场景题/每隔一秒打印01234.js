// 使用闭包实现

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

// 使用let块级作用域
// 每隔一秒打印
/* for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
} */

// 一秒之后全部打印
/* for(let i=0;i<5;i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
} */

// 循环一直打印01234
let i=0;
setInterval(() => {
  console.log( i % 5);
  i++
}, 1000)
