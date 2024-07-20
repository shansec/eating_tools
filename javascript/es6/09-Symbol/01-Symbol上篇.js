// Symbol是es6引入的一种新的原始数据类型，表示独一无二的值，Symbol是通过Symbol函数生成的
// Symbol()函数可以接受一个字符串作为参数，表示对Symbol实例的描述
// 如果Symbol的参数是一个对象，就会调用该对象的toString()方法，将其转为字符串，之后生成一个Symbol值
let s = Symbol();
console.log(typeof s);
const obj = {
  toString() {
    return 'abc';
  }
}
const sym = Symbol(obj);
console.log(sym);

// Symbol.prototype.description()
// 返回Symbol值得描述
const sym1 = Symbol('foo');
console.log(sym1.description);

// 作为属性名的Symbol
let mySymbol = Symbol();
// 第一种写法
// let a = {};
// a[mySymbol] = 'hello!';
// 第二种写法
// let a = {
//     [mySymbol]: 'Hello!'
// };
// 第三种方法
let a = {};
Object.defineProperty(a, mySymbol, {value: 'Hello!'})

console.log(a[mySymbol]);
