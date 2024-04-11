// 函数之闭包
// 词法作用域：函数执行时使用的是定义函数时生效的变量作用域，而不是调用函数时生效的变量作用域。
let scope = "global scope"
function checkscope() {
  let scope = "local scope";
  function f() { return scope }
  return  f()
}
console.log(checkscope())
// 改动一下上述函数
function checkscope_v2() {
  let scope = "local scope";
  function f() { return scope; }
  return f;
}
let s = checkscope_v2()()
console.log(s)

// 使用闭包重新定义上一个文件 uniqueInteger() 函数
let uniqueInteger = (function () {
  let counter = 0;
  return function() { return counter++; }
}());
// console.log(uniqueInteger())
// console.log(uniqueInteger())

function counter() {
  let n = 0;
  return {
    count: function() { return n++; },
    reset: function() { return n = 0 }
  }
}

let c = counter(), d = counter();
console.log(c.count());
console.log(d.count());
c.reset()
console.log(c.count());
console.log(d.count());

