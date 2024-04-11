// 对象之对象的创建
// JavaScript 创建对象可以通过对象字面量、new 关键字、Object.create()函数来创建

// 对象字面量
let empty = {}
let point = {x: 0, y: 0}
let point2 = {x: point.x, y: point.y + 1}
let book = {
    // 属性名包含空格和连字符，因此使用字符串字面量
    "main title": "JavaScript",
    "sub-title": "sub-title",
    author: {
        firstName: "David",
        surname: "Flanagan"
    }
}

// new 关键字创建对象
let o = new Object()
let a = new Array()
let d = new Date()
let r = new Map()

// Object.create() 创建对象
let obj1 = Object.create({x: 1, y: 2})
// obj1 没有属性 x 和 y,当访问这两个属性的时候，对象上没有就回去原型上查找
console.log(obj1.x + obj1.y)
console.log(obj1.hasOwnProperty('x'))

// 不继承任何属性和方法，如果想创建一个普通的空对象，只需要传入 Object.prototype 即可
let obj2 = Object.create(null)
let obj3 = Object.create(Object.prototype)
