// ES6诞生之前，异步编程的方法，大概有四种
// 1.回调函数
// 2.事件监听
// 3.发布/订阅
// 4.Promise对象
function* gen(x) {
  let y = yield x + 2;
  return y;
}

let g = gen(1);
console.log(g.next());
// console.log(g.next());

// Generator函数的数据交换和错误处理
// next返回值的value属性，是Generator函数向外输出数据，next方法还可以接收参数，向Generator函数内输入数据
// next方法接受的参数会做为上个阶段异步任务返回结果
console.log(g.next(2));

// Generator函数内部还可以部署错误处理代码，捕获函数体外抛出的错误
function* gen1(x) {
  try {
    var y = yield x + 2;
  } catch (e) {
    console.log(e);
  }
  return y;
}

let g1 = gen1(1);
console.log(g1.next());
console.log(g1.throw('出错了'));

// Thunk函数(传名调用的一种实现策略)
// Thunk函数是自动执行Generator函数的一种方法
// 函数参数的求值策略分为了传值调用和传名调用，传值调用就是先计算出表达式的值然后再传给函数；传名调用则是直接把表达式传递给函数等函数用到的时候再求值
// 编译器的传名调用的实现，是将参数放到一个临时函数之中，再将这个临时函数传入函数体，而这个临时函数就称为Thunk函数
function f(m) {
  return m * 2;
}

let x = 6;
console.log(f(x + 5));
// 等同于
var thunk = function () {
  return x + 5;
}

function f1() {
  return thunk() * 2;
}

console.log(f1());

// JavaScript语言的 Thunk函数
// 在Js中，Thunk函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数
