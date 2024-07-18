/**
 * Array.from()
 */
// Array.from：从一个可迭代对象或者类数组对象中创建一个浅拷贝的数组；
// Array.from(arrayLike, mapFn, thisArg)
//  arrayLike：想要转换成数组的类数组或可迭代对象
//  mapFn：调用数组每个元素的函数
//  thisArg：执行 mapFn 是 this 的值
console.log('strArr:', Array.from('foo'))

const set = new Set(['foo', 'bar', 'baz', 'foo'])
console.log('setArr:', Array.from(set))

const map = new Map([
  [1, 'a'],
  [2, 'b']
])
console.log('mapArr:', Array.from(map))
console.log('mapValueArr', Array.from(map.values()))
console.log('mapKeyArr', Array.from(map.keys()))

console.log(Array.from([1, 2, 3], x => x ** 2))
console.log(Array.from({ length: 5 }, (v, i) => i))

// 序列生成器
const range = (start, end, step) =>
  Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step)
console.log(range(0, 4, 1))
console.log(range(1, 10, 2))

/**
 * Array.isArray()
 */
// Array.isArray(): 确实传入的一个值是否为数组
// Array.isArray(value)
//  value: 需要检验的值
//  Array.isArray() 检查传递的值是否为 Array。它不检查值的原型链，
//  也不依赖于它所附加的 Array 构造函数。对于使用数组字面量语法或 Array 构造函数创建的任何值，它都会返回 true。

/**
 * Array.at()
 */
// Array.at()：接收一个整数并返回该索引对应的元素，可以是正数和负数，如果是负数的话从最后一个元素算起

// 实例方法 Array.prototype.xxx()
/**
 * Array.concat()
 */
// Array.concat()：用于合并两个数组，并返回一个新数组
// Array.concat(arr1, arr2, ..., arrN)
//  如果省略了所有 valueN 参数，则 concat 会返回调用此方法的现存数组的一个浅拷贝。
const letters = ['a', 'b', 'c']
const numbers = [1, 2, 3]
const alphaNumeric = letters.concat(numbers)
console.log('alphaNumeric:', alphaNumeric)
const shallowCopy = letters.concat()
shallowCopy[0] = 'aa'
console.log('shallowCopy:', shallowCopy)
console.log('letters:', letters)

/**
 * Array.copyWithin()
 */
// Array.copyWithin：浅复制数组的一部分到同一个数组中的另一个位置，并返回新数组，原数组不变
