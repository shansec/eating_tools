// 对象之对象字面量扩展语法
// 扩展运算符
//  在ES2018及之后，可以在对象字面量中使用“扩展操作符”
let position = {x: 0, y: 0}
let dimensions = {width: 100, height: 75}
let rect = {...position, ...dimensions}

let o = {
    dataProp: "value",

    get accessorProp() {
        console.log('获取')
        return this.dataProp;
    },
    set accessorProp(value) {
        console.log('设置', value)
        this.dataProp = value
    }
}

console.log(o.accessorProp)
console.log(o.accessorProp('newValue'))
