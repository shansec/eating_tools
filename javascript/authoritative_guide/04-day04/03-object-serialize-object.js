// 对象之序列化对象
//对象序列化（serialization）是把对象的状态转换为字符串的过程
let o = {x: 1, y: {z: [false, null, "", undefined]}}
let strObj = JSON.stringify(o)
console.log(JSON.stringify(o))
console.log(JSON.parse(strObj))
/**
 * JSON语法是JavaScript语法的子集，不能表示所有JavaScript的值。
 * 可以序列化和恢复的值包括对象、数组、字符串、有限数值、true、false和null。
 * NaN、Infinity和-Infinity会被序列化为null。
 */

let point = {
    x: 1,
    y: 2,
    toString: function () {
        return `(${this.x}, ${this.y})`
    },
    toJSON: function () {
        return this.toString()
    }
}
console.log(JSON.stringify(point))
