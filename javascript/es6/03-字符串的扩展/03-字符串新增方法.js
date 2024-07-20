// fromCharCode不能识别码点大于0xFFFF的字符
console.log(String.fromCharCode(0x20BB7));
// fromCodePoint有多个参数时，会被合并成一个字符串返回
console.log(String.fromCodePoint(0x20BB7));

// String.raw()
console.log(String.raw`Hi\n${2 + 3}`);
console.log(String.raw`Hi\\n`);

// 这三个方法都致支持第二个参数，第二个参数表示开始搜索的位置
let s = "Hello world!";
console.log(s.startsWith('H'));
console.log(s.endsWith('H'));
console.log(s.includes("o"));

// repeat(n) 将原有字符串重复 n 次
console.log('x'.repeat(3));

// padStart() 和 padEnd() 可以补全字符串
console.log('x'.padStart(5, 'ad'));
console.log('x'.padEnd(5, 'ad'));
//  省略第二个参数，默认使用空格补全长度
console.log('x'.padStart(5));

//  trimStart() 和 trimEnd() 用于消除字符串的空格
const b = '   abc   ';
console.log(b.trim());
console.log(b.trimStart());
console.log(b.trimEnd());
// 三种方法返回的都是新字符串，不会修改原来的字符串
console.log(b);

// replaceAll() 可以一次性替换掉所有的匹配
// 报错，不支持这个函数
console.log('aabbcc'.replaceAll('b', '_'));

// at() 接受一个整数作为参数，返回参数指定位置的字符，支持负索引
const str = "hello";
// 报错，不支持这个函数
console.log(str.at(1));
