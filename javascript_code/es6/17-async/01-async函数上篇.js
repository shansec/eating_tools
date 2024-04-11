// async函数是Generator函数语法糖
// async函数对Generator函数的改进，提现以下四点：
//  1.async函数自带执行器，async函数的执行和普通函数一样
//  2.async函数有更好的语义
//  3.co模块约定，yield命令后面只能是Thunk函数或者是promise对象，而async函数的await命令后面，可以使promise对象和原始类型值
//  4.async函数返回值是promise对象

//async函数的基本用法
// async 函数返回一个Promise对象，可以使用then方法添加回调函数
// 当函数执行的时候，一旦遇到 await 就会先返回，等到异步操作完成，再接着执行函数体内后面的雨具
// async function getStockPriceByName(name) {
//     const symbol = await getStockSymbol(name);
//     const stickPrice = await getStockPrice(symbol);
//     return stickPrice;
// };
// getStockPriceByName('good').then((res) => console.log(res));

// 下面的例子是指定多少毫秒输出一个值
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world!', 1000);
// async 函数有多种使用形式
// 函数声明
async function foo() {
}

// 函数表达式
const foo1 = async function () {
}
// 对象的方法
let obj = {
  async foo2() {
  }
};

// Class的方法
class Store {
  async getAvatar(name) {
  }
}

// 语法
// async函数内部return语句返回的值，会成为then方法回调函数的参数
async function f() {
  return 'hello world!';
}

f().then(v => console.log(v));

// async函数内部抛出的错误，会导致返回的Promise对象变成为reject状态
async function f1() {
  throw new Error('出错了');
}

f1().then(
    v => console.log('resolve', v),
    e => console.log('reject', e)
)
// 注意：async函数返回的Promise对象，必须等到内部所有await命令后面的Promise对象执行完，才会发生状态改变
//      即只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数
// await命令
// await命令后面是一个Promise对象，返回该对象的结果，如果不是Promise对象，直接返回对应的值
// 另一种情况，如果await命令后面是一个thenable对象(定义了then方法的对象),那么await会将其等同于Promise对象
//如果await后面的异步操作出错，那么等同于async函数返回的Promise对象被reject
async function fo() {
  await new Promise(function (resolve, reject) {
    throw new Error('出错了');
  });
}

fo()
    .then(v => console.log(v))
    .catch(e => console.log(e))

// await 使用注意点
// 第一点：await命令后面的Promise对象运行结果可能是rejected，最好把await命令放在try...catch代码块中
function somethingThatReturnsAPromise() {
}

async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 第二点：多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发
// 第三点：await命令只能用在async函数之中，如果用在普通函数会报错
// 第四点：async函数可以保留运行堆栈
