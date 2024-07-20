// 在这里记录一下二进制浮点数与舍入错误
debugger
let x = .3 - .2;
console.log('x 的值为:', x);
let y = .2 - .1;
console.log('y 的值:', y);
// 这并不是JavaScript独有的问题，而是所有使用二进制浮点数的编程语言共同的问题。
console.log('x 和 y 是否相等：', x === y ? '相等' : '不相等');