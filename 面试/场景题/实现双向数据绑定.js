let obj = {};
let input = document.getElementById("input");
let span = document.getElementById("span");

// 数据劫持
Object.defineProperty(obj, "text", {
  get() {
    console.log("获取数据成功");
  },
  set(newValue) {
    console.log("修改数据成功");
    input.value = newValue;
    span.innerHTML = newValue;
  },
});

// 输入监听
input.addEventListener("keyup", function (e) {
  obj.text = e.target.value;
});
