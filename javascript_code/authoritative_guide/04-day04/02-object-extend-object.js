// 对象之扩展对象
let target = {x: 1},
    source = {y: 2, z: 3};
for (let key of Object.keys(source)) {
    target[key] = source[key]
}
console.log(target)

// 在 ES6 中，对象的扩展可以通过 Object.assign() 实现
// Object.assign()接收两个或多个对象作为其参数。它会修改并返回第一个参数，第一个参数是目标对象，
//  但不会修改第二个及后续参数，那些都是来源对象。对于每个来源对象，它会把该对象的可枚举自有属性（包括名字为符号的属性）复制到目标对象。
// Object.assign() 会出现属性覆盖的情况，就是说第一个源对象的属性会覆盖目标对象，
// 重写 Object.assign()
function merge(target, ...sources) {
    for (let source of sources) {
        for (let key of Object.keys(source)) {
            if (!(key in target)) {
                target[key] = source[key]
            }
        }
    }
    return target
}

console.log(Object.assign({x:1}, {x: 2, y: 2}, {y: 3, z: 4}))
console.log(merge({x:1}, {x: 2, y: 2}, {y: 3, z: 4}))
