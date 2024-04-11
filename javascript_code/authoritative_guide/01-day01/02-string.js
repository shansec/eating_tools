let str = 'Hello Javascript';
// 取的字符串的一部分
// 从零开始
console.log(str.substring(1, 4));
// 数字为正数是从零开始，为负的时候是从 -1 开始
console.log(str.slice(1, 4));
console.log(str.split(' '));

// 搜索字符串
console.log(str.indexOf('J'));
// 位置 10 后面第一个 a 的位置，位置从 1 开始算
console.log(str.indexOf('a', 10));
console.log(str.lastIndexOf('a'));

// ES6 以及之后版本出现的搜索函数
console.log(str.startsWith('Hell'));
console.log(str.endsWith('t'));
console.log(str.includes('j'));

// 删除空格函数
/**
 * trim(): 删除开头和末尾空格
 * trimStart(): 删除左侧空格
 * trimEnd(): 删除右侧空格
 */

// 填充函数
console.log('x'.padStart(3));
console.log('x'.padEnd(3));
console.log('x'.padStart(3, '*'));
console.log('x'.padEnd(3, '_'));


// 标签化模板字面量
// 如果在开头的反引号前面有一个函数名（标签），那么模板字面量中的文本和表达式的值将作为参数(以数组的形式传递)传给这个函数。
//  “标签化模板字面量”（taggedtemplate literal）的值就是这个函数的返回值。
function printStrLength (str) {
  if (typeof str == 'object') {
    return str[0].length;
  } else {
    return 'undefined';
  }
}

let result = printStrLength`hello`
console.log(result);
