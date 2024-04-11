// 迭代器和生成器
let list = [1, 2, 3, 4, 5]
let iter = list[Symbol.iterator]()
let head = iter.next().value
console.log(head)
let tail = [...iter]
console.log(tail)
