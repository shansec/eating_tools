// 扩展运算符
console.log(...[1, 2, 3]);
console.log(1, ...[2, 3, 4]);

function add(x, y) {
  return x + y;
}

const number = [8, 32];
console.log(add(...number));

function f(v, m, x, y, z) {
  console.log(arguments);
}

// 注意：只有函数调用时，扩展运算符才可以放到圆括号中，否则会报错
f(-1, ...[0, 1], 2, ...[3]);
// 扩展运算符的使用
//  复制数组
const a1 = [1, 2];
const a2 = [...a1];
a2[0] = 2;
console.log(a1);
//  合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
// 浅拷贝
const arr4 = [...arr1, ...arr2, ...arr3]
console.log(arr4);
//  字符串
// 扩展运算符可以将字符串转换为真正的数组
const a = [...'hello'];
console.log(a);
//  Map 和 Set结构，Generator函数
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
])
let arr = [...map.values()];
console.log(arr);

// Array.from()
// Array.from 可以将类似数组的对象和可遍历的对象转换为真正的数组
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
// es6 写法
let arr5 = Array.from(arrayLike);
console.log(arr5);

// Array.of() 可以将一组值转换为数组
console.log(Array.of(3, 11, 8));
console.log(Array.of(3));
console.log(Array.of(3).length);

// copyWithin()
// 在当前数组内部，将指定位置的成员复制到其它位置，然后返回当前数组
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));

// fill()
// 使用给定值填充一个数组
console.log(['a', 'b', 'c'].fill(7));
console.log(['a', 'b', 'c'].fill(7, 1, 2));

// entries(), keys(), values()
// 三者都是用于遍历数组，keys()是对键名的遍历，values()是对键值的遍历，entries()对键值对进行遍历
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
for (let value of ['a', 'b'].values()) {
  console.log(value);
}
for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
