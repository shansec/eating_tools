// 对象基础
// 对象是一种复合值，并且允许我们按名字存储和获取这些值
// 对象是一个属性的无序集合，每个属性都有名字和值
// 在JavaScript中，任何不是字符串、数值、符号或true、false、null、undefined的值都是对象。

/**
 * 除了名字和值之外，每个属性还有3个属性特性：
 *  - writable（可写）特性指定是否可以设置属性的值。
 *  - enumerable（可枚举）特性指定是否可以在for/in循环中返回属性的名字。
 *  - configurable（可配置）特性指定是否可以删除属性，以及是否可修改其特性
 */
let data = {}
// debugger
data = Object.create(null, {
    foo: {
        writable: true,
        configurable:true,
        enumerable: false,
        value: 'foo'
    }
})
console.log('data 包含的属性', data.foo)
