// Set类似于数组，但是其成员都是唯一的，没有重复的值
const s = new Set();
[2, 3, 2, 8, 9].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);
}
// Set函数可以接受一个数组（或者具有iterable接口的其它数据结构）作为参数
// 向Set加入值的时候，不会发生类型转换，Set内部判断两个值是否不通，使用的算法类似于 ===
const set = new Set([1, 2, 3, 4]);
console.log([...set]);
const items = new Set([1, 2, 3, 4, 5, 5, 5]);
console.log([...items]);
console.log('items的长度为', items.size);
// 向Set中添加值时，Set认为NaN等与自身，而精确相等运算符认为NaN不能与自身
let set1 = new Set();
let a = NaN;
let b = NaN;
set1.add(a);
set1.add(b);
console.log(set1);

// Set实例的属性和方法
// Set.prototype.constructor：构造函数，默认就是Set
let set2 = new Set.prototype.constructor();
console.log(set2);
// Set.prototype.size：返回Set实例的成员总数
// Set.prototype.add(value)：添加某个值
// Set.prototype.delete(value)：删除某个值
// Set.prototype.has(value)：返回一个布尔值
// Set.prototype.clear()：清除所有成员
let s1 = new Set();
s1.add(1).add(2).add(2);
console.log(s1.size);

// 去除数组成员变量
function deduce(array) {
  return Array.from(new Set(array));
}

console.log(deduce([1, 2, 2, 3, 4, 4, 5]));

// 遍历操作
// Set.prototype.keys()：返回键名的遍历器
// Set.prototype.values()：返回键值的遍历器
// 由于 Set 结构没有键名，只有键值，所以keys 和 values 方法的行为完全一致。
// Set.prototype.entries()：返回键值对的遍历器
// Set.prototype.forEach()：使用回调函数遍历每个成员
let set3 = new Set(['red', 'blue', 'green']);

console.log('----keys----');
for (let item of set3.keys()) {
  console.log(item);
}
console.log('----values----');
for (let item of set3.values()) {
  console.log(item);
}
console.log('----entries----');
for (let item of set3.entries()) {
  console.log(item);
}


// WeakSet
// WeakSet结构和Set类似，也是不重复值得集合，但是它和Set有两个区别
// 第一是WeakSet的成员只能是对象，不能是其它数据类型
// 第二是WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用
let ws = new WeakSet();
const obj = {};
const foo = {};
ws.add(window);
ws.add(obj);
