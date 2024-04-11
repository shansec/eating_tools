// yield* 表达式
// 如果在Generator函数内部，调用另一个Generator函数，需要在前者函数体内部自己手动完成遍历
function* foo() {
  yield 'a';
  yield 'b';
};

function* bar() {
  yield 'x';
  // 手动遍历 foo()
  for (let i of foo()) {
    console.log(i);
  }
  yield 'y';
};
for (let v of bar()) {
  console.log(v);
}

// ES6提供了 yield*表达式作为解决办法，用来在一个generator函数里面执行另一个Generator函数
function* bar1() {
  yield 'x';
  yield* foo();
  yield 'y';
}

for (let v of bar1()) {
  console.log(v)
}

// 作为对象属性的Generator函数
// 如果一个对象的属性时Generator函数，可以简写为下面的形式
let obj = {
  * myGeneratorMethod() {
  }
};

// Generator函数的this
// Generator函数总是返回一个遍历器，ES6规定这个遍历器是Generator函数的实例，也继承了Generator函数的prototype对象的方法
function* g() {
}

g.prototype.hello = function () {
  return "Hi!";
};
let obj1 = g();
console.log(obj1 instanceof g);
console.log(obj1.hello());
// new关键字和Generator函数不能一起使用，但是可以通过变通方法
// 首先，生成一个空对象，使用call方法绑定Generator函数内部的this
function* F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
};
let obj3 = {};
let f = F.call(obj3);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(obj3.a)

// 上面代码中执行的是遍历器对象f,生成的对象实例是obj3, 可以采用以下方式使得二者统一
function* gen() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
};

function F() {
  return gen.call(gen.prototype);
};
let f1 = F();
console.log(f1.next());
console.log(f1.a);

// Generator与状态机
// Generator是实现状态机的最佳结构，下面的clock函数就是一个状态机
let ticking = true;
let clock = function () {
  if (ticking)
    console.log('Tick!');
  else
    console.log('Tock!');
  ticking = !ticking;
};
// 这个函数用Generator实现，代码如下
let clock1 = function* () {
  while (true) {
    console.log('Tick!');
    yield;
    console.log('Tock!');
    yield;
  }
};
let ae = clock1();
console.log(ae.next());
console.log(ae.next());
