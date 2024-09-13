// 三个亮灯函数

function red() {
  console.log("红灯");
}
function yellow() {
  console.log("黄灯");
}
function green() {
  console.log("绿灯");
}

// 实现方式

// 1. 用callback递归实现

const task1 = (timer, light, callback) => {
  setTimeout(() => {
    if (light === "red") {
      red();
    } else if (light === "yellow") {
      yellow();
    } else if (light === "green") {
      green();
    }
    callback();
  }, timer);
};

const step1 = () => {
  task1(3000, "red", () => {
    task1(2000, "yellow", () => {
      task1(1000, "green", step1);
    });
  });
};
// step1();

// 2. promise实现
const task2 = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "yellow") {
        yellow();
      } else if (light === "green") {
        green();
      }
      resolve();
    }, timer);
  });
};

const step2 = () => {
  task2(3000, "red")
    .then(() => task2(2000, "yellow"))
    .then(() => task2(1000, "green"))
    .then(step2);
};

// step2();


// 用 async/await 实现

const task3 = async() => {
    await task2(3000,'red');
    await task2(2000,'yellow');
    await task2(1000,'green');
    task3();
}

task3();