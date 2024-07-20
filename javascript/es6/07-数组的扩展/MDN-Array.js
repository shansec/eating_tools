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
 * Array.of()
 */
// Array.of()：通过可变数量的参数创建一个 Array 实例，不考虑参数的数量和类型
// Array.of(value)
//  value: 可变数量的参数
//  Array.of 和 Array 构造函数之间的区别在于对于单个参数的处理，
//  Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个 length 为7的空数组
console.log('Array.of:', Array.of(7))
console.log('Array:', Array(7))

/**
 * Array.at()
 */
// Array.at()：接收一个整数并返回该索引对应的元素，可以是正数和负数，如果是负数的话从最后一个元素算起

// 实例方法 Array.prototype.xxx()
/**
 * Array.prototype.concat()
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
 * Array.prototype.copyWithin()
 */
// Array.copyWithin：浅复制数组的一部分到同一个数组中的另一个位置，并返回新数组，原数组不变
// Array.prototype.copyWithin(target, start, end)
//  target: 序列开始替换的位置
//    - 负索引从数组末尾开始计数
//    - target 大于数组的长度不会复制任何内容
//    - target 位于 start 之后，则复制只会持续到 array.length 结束，copyWithin 不会扩展数组
//  start: 复制序列开始的位置
//    - 负索引从数组末尾开始计数
//    - 如果省略 start 或者 start < -array.length 则 start 为 0
//    - 如果 start >= array.length 则不会复制任何内容
//  end: 复制序列结束的位置
//    - 负索引从数组末尾开始计数
//    - 如果 end < -array.length 则 end 为 0
//    - 如果省略 end 或者 end > array.length 则 end 为 array.length
//    - 如果 end 位于 start之前 则不会复制任何内容
// 注意： 如果遇见负数，可以通过 index + array.length 把索引转成正数
console.log([1, 2, 3, 4, 5].copyWithin(-2))
console.log([1, 2, 3, 4, 5].copyWithin(0, 3))
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1))
console.log([1, 2, 3, 4, 5].copyWithin(3, 2, 4))
console.log([1, , 3].copyWithin(2, 1, 2))

/**
 * Array.prototype.entries()
 */
// Array.prototype.entries()：返回一个新的迭代器对象，该对象包含数组的每个索引的 键/值 对
const entriesArr = ['a', 'b', 'c']
for (const [index, element] of entriesArr.entries()) {
  console.log(index, element)
}

/**
 * Array.prototype.every()
 */
// Array.prototype.every()：测试一个数组内所有元素是否都能通过指定函数的测试
// Array.prototype.every(callbackFn, thisArg)
//  callbackFn：为数组中的每个元素执行的函数，callbackFn 仅针对已分配值的数组索引调用。它不会为稀疏数组中的空槽调用。
//    - element：数组中当前正在处理的元素
//    - index：正在处理的元素在数组中的索引
//    - array：调用了 every() 的数组本身
// every() 不会改变调用它的数组，但指定的 callbackFn 函数可以。但是请注意，数组的长度是在第一次调用 callbackFn 之前保存的。所以：
//  当开始调用 every() 时，callbackFn 将不会访问超出数组初始长度的任何元素。
//  对已访问索引的更改不会导致再次在这些元素上调用 callbackFn。
//  如果数组中一个现有的、尚未访问的元素被 callbackFn 更改，则它传递给 callbackFn 的值将是该元素被修改后的值。被删除的元素则不会被访问。
const isBigEnough = (element, index, array) => element >= 10
console.log([12, 5, 8, 130, 44].every(isBigEnough))
const isSubset = (array1, array2) => array2.every(element => array1.includes(element))
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]))
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]))
console.log([2, , 2].every(x => x === 2))
// 修改元素
let arr = [1, 2, 3, 4]
arr.every((elem, index, arr) => {
  arr[index + 1]--
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 2
})
// 删除元素
arr = [1, 2, 3]
arr.every((elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})
// 在非数组对象上调用 every()
// every() 方法读取 this 的 length 属性，然后访问每个整数索引，直到到达末尾或 callbackFn 返回 false。
const arrayLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c'
}
console.log(Array.prototype.every.call(arrayLike, x => typeof x === 'string'))

/**
 * Array.prototype.fill()
 */
// Array.prototype.fill()：用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为 array.length）内的全部元素。它返回修改后的数组。
// Array.prototype.fill(value, start, end)
//  value：用来填充数组元素的值，如果 value 是个对象，那么数组的每一项都会引用这个元素
//  start：基于 0 的索引，注意事项参考 Array.prototype.copyWithin()
//  end 0 的索引，注意事项参考 Array.prototype.copyWithin()
console.log([1, 2, 3].fill(4)) // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)) // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)) // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)) // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)) // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)) // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)) // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)) // [1, 2, 3]
console.log(Array(3).fill(4)) // [4, 4, 4]
const arr1 = Array(3).fill({})
arr1[0].hi = 'hi'
console.log(arr1)

/**
 * Array.protype.filter()
 */
// Array.prototype.filter()：创建给定数组一部分的浅拷贝，包含了通过所提供函数实现的测试的所有元素
// Array.prototype.filter(callbackFn, thisArg)
//  callbackFn：为数组中的每个元素执行的函数，callbackFn 仅针对已分配值的数组索引调用。它不会为稀疏数组中的空槽调用。
//    - element：数组中当前正在处理的元素
//    - index：正在处理的元素在数组中的索引
//    - array：调用了 filter() 的数组本身

/**
 * Array.prototype.find()
 */
// Array.prototype.find()：返回数组中满足提供的测试函数的第一个函数的值，否则返回 undefined
//  如果需要在数组中找到对应元素的索引，请使用 findIndex()
//  如果需要查找某个值的索引，请使用 Array.prototype.indexOf()
//  如果需要查找数组中是否存在某个值，请使用 Array.prototype.includes()
//  如果需要查找是否有元素满足所提供的测试函数，请使用 Array.prototype.some()
// Array.prototype.find(callbackFn, thisArg)
//  callbackFn：为数组中的每个元素执行的函数，callbackFn 被调用来处理数组的每一个索引，而不仅仅是那些有值的索引。在稀疏数组中，未赋值的空槽与 undefined 表现相同。
//    - element：数组中当前正在处理的元素
//    - index：正在处理的元素在数组中的索引
//    - array：调用了 find() 的数组本身
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
]
const isCherries = fruit => fruit.name === 'cherries'
console.log(inventory.find(isCherries))

/**
 * Array.prototype.findIndex()
 */

/**
 * Array.prototype.findLast()
 */

/**
 * Array.prototype.flat()
 */
// Array.prototype.flat()：创建一个新的数组，并根据置顶深度递归地将所有子数组元素拼接到新的数组中
// Array.prototype.flat(dept)，如果待展开的数组是稀疏的，flat() 方法会忽略其中的空槽。
//  dept: 置顶要提取嵌套数组的结构深度，默认值为 1
console.log([1, 2, [3, 4]].flat())
console.log([1, 2, [3, [4]]].flat())
// 稀疏数组调用 float() 会把空元素去掉
console.log([1, 2, , 3, [4]].flat())

/**
 * Array.prototype.forEach()
 */

/**
 * Array.prototype.includes()
 */

/**
 * Array.prototype.indexOf()
 */

/**
 * Array.prototype.lastIndexOf()
 */

/**
 * Array.prototype.join()
 */

/**
 * Array.prototype.keys()
 */

/**
 * Array.prototype.map()
 */
// Array.prototype.map()：创建一个新数组，新数组是由原数组中的每个元素调用一次提供的函数后的返回值组成
// Array.prototype.map(callbackFn, thisArg)
//  callbackFn：为数组中的每个元素执行的函数，callbackFn 仅针对已分配值的数组索引调用。它不会为稀疏数组中的空槽调用。
//    - element：数组中当前正在处理的元素
//    - index：正在处理的元素在数组中的索引
//    - array：调用了 map() 的数组本身

/**
 * Array.prototype.flatMap()
 */
// Array.prototype.flatMap()：对数组中的每个元素应用给定的回调函数，然后将结果展开一级，返回一个新数组。等价于 map() + flat(1)
// Array.prototype.map(callbackFn, thisArg)
//  callbackFn：为数组中的每个元素执行的函数
//    - element：数组中当前正在处理的元素
//    - index：正在处理的元素在数组中的索引
//    - array：调用了 flatMap() 的数组本身

/**
 * Array.prototype.pop()
 */

/**
 * Array.prototype.push()
 */

/**
 * Array.prototype.reduce()
 */
// Array.prototype.reduce()：对数组中的每个元素按序执行一个提供的 reducer 函数，
//  每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
// Array.prototype.reduce(callbackFn, initialValue)
//  callbackFn： 为数组中每个元素执行的函数。callbackFn 仅对已分配值的数组索引进行调用。不会对稀疏数组中的空槽进行调用。
//    - accumulator：上一次调用 callbackFn 的结果。在第一次调用时，如果指定了 initialValue 则为指定的值，否则为 array[0] 的值。
//    - currentValue：当前元素的值。在第一次调用时，如果指定了 initialValue，则为 array[0] 的值，否则为 array[1]。
//    - currentIndex： currentValue 在数组中的索引位置。在第一次调用时，如果指定了 initialValue 则为 0，否则为 1。
//    - array：调用了 reduce() 的数组本身
//  initialValue：第一次调用回调时初始化 accumulator 的值。

/**
 * Array.prototype.reserve()
 */

/**
 * Array.prototype.shift()
 */

/**
 * Array.prototype.unshift()
 */

/**
 * Array.prototype.slice()
 */

/**
 * Array.prototype.some()
 */

/**
 * Array.prototype.splice()
 */

/**
 * Array.prototype.toLocaleString()
 */
// Array.prototype.toLocaleString()：返回一个字符串，表示数组中的所有元素。
//  每个元素通过调用它们自己的 toLocaleString 方法转换为字符串，并且使用特定于语言环境的字符串（例如逗号“,”）分隔开
// toLocaleString(locales, options)：
//  locales：带有 BCP 47 语言标签的字符串，或者此类字符串的数组
//  options：一个具有配置属性的对象
const prices = ['￥7', 500, 8123, 12]
console.log(prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))

/**
 * Array.prototype.toReversed()
 */

/**
 * Array.prototype.toSorted()
 */

/**
 * Array.prototype.toSpliced()
 */

/**
 * Array.prototype.values()
 */
