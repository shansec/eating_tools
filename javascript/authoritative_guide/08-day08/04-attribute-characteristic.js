// 属性的特性
// ·可写（writable）特性指定是否可以修改属性的值。
// ·可枚举（enumerable）特性指定是否可以通过for/in循环和Object.keys()方法枚举属性。
// ·可配置（configurable）特性指定是否可以删除属性，以及是否可以修改属性的特性。
let valAttribute = Object.getOwnPropertyDescriptor({x: 1}, 'x')
console.log(valAttribute)

let o = {}
Object.defineProperty(o, 'x', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
})
console.log(o.x)
console.log(Object.keys(o))
