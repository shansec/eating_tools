/**
 * 对象解构赋值
 */
// 变量名需要和对象的属性名同名
let {fo, bar} = {fo: 'foo', bar: 'bar'};
console.log(fo, bar);

const {log} = console;
log('hello')

// 对象解构赋值的内部机制是先找到同名属性，然后再赋给对应的变量
let obj = {first: 'hello', last: 'world'};
let {first: fi, last: l} = obj;
log(fi, l);
