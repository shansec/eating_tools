// 函数之函数作为值
// 函数名称作为值可以赋值给变量、对象的属性
function square(x) {
  return x**2
}

let s_func = square
console.log(square(3))
console.log(s_func(4))

// 函数定义自己的属性
uniqueInteger.counter = 0
function uniqueInteger() {
  return uniqueInteger.counter++;
}
console.log(uniqueInteger())
console.log(uniqueInteger())


