// 函数之函数属性、方法和构造函数

// length 属性
// 剩余形参不会被包含在 length 属性之中
function func_length(a, b , ...c) {}
console.log(func_length.length)

// name 属性
function func_name() {}
console.log(func_name.name)

// prototype 属性
// 除了箭头函数之外，所有的函数都有一个 prototype 属性
function func_prototype() {}
console.log(func_prototype.prototype)

// call() 方法和 apply() 方法
let o = {
  name: 'call'
}
function func_call(...param) {
  console.log(param)
}
/**
 * 下面的代码等同于：
 *    o.m = func_call()
 *    o.func_call()
 *    delete o.func_call
 */
func_call.call(o, 1, 2, 3)
func_call.apply(o, [1, 2, 3])

// bind() 方法


// toString() 方法
function func_toString() {}
console.log(func_toString.toString())
