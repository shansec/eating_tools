// 数组之数组的创建方式
/**
 * - 数组字面量
 * - Array()构造函数
 * - 工厂方法Array.of() 和 Array.from()
 * - 扩展操作符
 */

// 数组字面量创建
let empty = []
let primes = [2, 3, 4, 5, 11]
let misc = [1.1, true, "a",]

// 扩展运算符
// 扩展运算符是数组的一种浅拷贝
let a = [1, 2, 3]
let b = [0, ...a, 4]

// Array()构造函数
// 不传参数调用
let no_argm_array = new Array()
console.log(no_argm_array)
// 传入数组参数，指定长度
let len_array = new Array(10)
console.log(len_array)

// Array.of() 工厂方法
console.log(Array.of())
console.log(Array.of(10, 11))
console.log(Array.of(1, 3, 5, 7))
