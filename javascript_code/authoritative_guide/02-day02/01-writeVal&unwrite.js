let str = 'hello'
// javascript 不允许改变字符串的值
console.log('转换成大写：', str.toLocaleUpperCase())
console.log('str 原始值：', str);

let a = []
let b = a
b[0] = 1
console.log(a[0])
console.log(b === a)
