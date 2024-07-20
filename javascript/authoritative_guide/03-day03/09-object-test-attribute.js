// 对象之测试属性
// 对象通过 in hasOwnProperty() propertyIsEnumerable() 可以检测是否包含给定的属性
let o = { x: 1 }
console.log("x" in o)
console.log("y" in o)

// propertyIsEnumerable()方法：如果传入的命名属性是自由属性且这个属性的enumerable特性为true，则返回 true
