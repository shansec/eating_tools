/**
 * Object.assign()
 */
// Object.assign()：将一个或者多个源对象中所有可枚举和自有属性复制到目标对象
// Object.assign(target, ...sources)
//  target：目标对象
//  source：源对象
const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }
console.log(Object.assign(target, source))
// 原型链上的属性和不可枚举的属性不能被复制
const obj = Object.create(
  { foo: 1 },
  {
    bar: {
      value: 2
    },
    baz: {
      value: 3,
      enumerable: true
    }
  }
)
const copy = Object.assign({}, obj)
console.log('copy', copy)
// 基本类型会被封装成对象
const v1 = 'abc'
const v2 = true
const v3 = 10
const v4 = Symbol('foo')
const obj1 = Object.assign({}, v1, null, v2, undefined, v3, v4)
console.log('obj1', obj1)

/**
 * Object.create()
 */
// Object.create()：以一个现有对象作为原型，创建一个对象
// Object(proto, propertiesObject)
//  proto：新创建对象的原型对象
//  propertiesObject：如果该参数被指定且不为 undefined，
//    则该传入对象可枚举的自有属性将为新创建的对象添加具有对应属性名称的属性描述符。
function Shape() {
  this.x = 0
  this.y = 0
}
Shape.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  console.info('Shape moved.')
}
function Rectangle() {
  Shape.call(this) // 调用父类构造函数
}
Rectangle.prototype = Object.create(Shape.prototype, {
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true
  }
})
const rect = new Rectangle()
console.log('rect 是 Rectangle 类的实例吗？', rect instanceof Rectangle)
console.log('rect 是 Shape 类的实例吗？', rect instanceof Shape)
rect.move(1, 1)
const o = Object.create(Object.prototype, {
  // 默认情况下，属性是 只读、可枚举、可配置
  foo: {
    writable: true,
    configurable: false,
    value: 'hello'
  },
  bar: {
    configurable: false,
    get() {
      return 10
    },
    set(value) {
      console.log('Setting `o.bar` to', value)
    }
  }
})
o.bar = 20
console.log('o', o.bar)

/**
 * Object.defineProperties()
 */
// Object.defineProperties()：直接在一个对象上定义新的属性或者修改现有属性，并返回改对象
// Object.defineProperties(obj, prop)
//  obj：在其上定义或修改属性的对象
//  prop
//    - configurable：属性是否可修改或者从对象中删除，默认为 false
//    - enumerable：在枚举对应对象属性时应显示出来，默认为 false
//    - value：默认为 undefined
//    - writable：属性的值是否可以使用赋值运算符修改，默认为 false
//    - get
//    - set

/**
 * Object.defineProperty()
 */
// Object.defineProperty()：直接在一个对象上定义一个新属性或者修改现有属性
// Object.defineProperty(obj, prop, descriptor)
//  obj：要定义的对象
//  prop：一个字符串或 Symbol 指定要定义或者修改的属性键
//  descriptor：对要定义或者要修改属性的描述字段
const obj2 = {}
const descriptor = Object.create(null)
descriptor.value = 'staice'
Object.defineProperty(obj2, 'key', descriptor)
Object.defineProperty(obj2, 'key2', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'key2'
})
console.log('obj2', JSON.stringify(obj2))

/**
 * Object.entries()
 */
// Object.entries()：返回一个数组，包含给定对象自有的可枚举字符串属性的键值对
const obj3 = { foo: 'bar', baz: 42 }
console.log('obj3', Object.entries(obj3))
