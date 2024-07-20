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
// 在基本类型中使用 Object.entries()，只有字符串会被正常枚举，其它基本类型返回的是空数组
console.log(Object.entries('foo'))
console.log(Object.entries(100))

/**
 * Object.freeze()
 */
// Object.freeze()：使一个对象被冻结，冻结对象可以防止扩展，并使现有的属性不可写入和不可配置。
//  被冻结的对象不能再被更改：不能添加新的属性，不能移除现有的属性，不能更改它们的可枚举性、可配置性
//  可写性或值，对象的原型也不能被重新指定。freeze() 返回与传入的对象相同的对象。
const obj4 = {
  prop() {},
  foo: 'bar'
}
obj4.foo = 'bar2'
obj4.lumoy = 'woof'
delete obj4.prop
console.log(obj4)
const obj4Freeze = Object.freeze(obj4)
obj4Freeze.foo = 'bar3' // 静默模式下什么都不做，严格模式下会报错
console.log(obj4Freeze)
const arr = [0]
console.log('freeze arr before:', arr)
Object.freeze(arr)
arr[0] = 2
console.log('freeze arr after:', arr)
// ! 浅冻结: 调用 Object.freeze() 的结果仅适用于 Object 本身的直接属性，并且只会在 object 上防止未来的属性添加
// !  删除或者重新赋值的操作，如果属性本身是对象，这些对象不会被冻结，并且可能成为属性添加、删除或重新赋值的目标。
const employee = {
  name: 'may',
  designation: 'developer',
  address: {
    street: 'rohihi',
    city: 'delhi'
  }
}
console.log('employee freeze before:', employee)
Object.freeze(employee)
employee.name = 'aaa'
employee.address.city = 'zhengzhou'
console.log('employee freeze after:', employee)
// 为了实现深度冻结需要以下方法
const deepFreeze = object => {
  // 获取对象的属性名
  const propNames = Reflect.ownKeys(object)

  for (const name of propNames) {
    const value = object[name]

    if ((value && typeof value === 'object') || typeof value === 'function') {
      deepFreeze(value)
    }
  }

  return Object.freeze(object)
}
console.log('employee deepFreeze before:', employee)
deepFreeze(employee)
employee.name = 'aaa'
employee.address.city = 'henan'
console.log('employee deepFreeze after:', employee)

/**
 * Object.isFrozen()
 */

/**
 * Object.fromEntries()
 */
// Object.fromEntries()：将键值对列表转换成一个对象
// Object.fromEntries(iterable)：
//  iterable：一个包含对象列表的可迭代对象，每个对象都要有两个属性：
//    - 表示属性的字符串或者 Symbol
//    - 属性值
const map = new Map([
  ['foo', 'bar'],
  ['baz', 42]
])
const obj5 = Object.fromEntries(map)
console.log('obj5', obj5)

/**
 * Object.getOwnPropertyDescriptor()
 */

/**
 * Object.getOwnPropertyDescriptors()
 */

/**
 * Object.getOwnPropertyNames()
 */

/**
 * Object.getPrototypeOf()
 */
// Object.getPrototypeOf()：返回置顶对象的原型
const proto = {}
const obj6 = Object.create(proto)
console.log(Object.getPrototypeOf(obj6) === proto)

/**
 * Object.hasOwn()
 */

/**
 * Object.is()
 */
// Object.is()：确定两个值是否为相同值
// Object.is() 确定两个值是否为相同值，如果下列任意一种情况成立，则两个值相同
//   - 都是 undefined
//   - 都是 null
//   - 都是 true 或者都是 false
//   - 都是长度相同、字符相同、顺序相同的字符串
//   - 都是相同的对象（意味着两个值都引用了内存中的同一对象）
//   - 都是 BigInt 且具有相同的数值
//   - 都是 symbol 且引用相同的 symbol 值
//   - 都是数字且
//   - 都是 +0
//   - 都是 -0
//   - 都是 NaN
//   - 都有相同的值，非零且都不是 NaN
// ! Object.is() 和 == 运算符不等价，== 运算符在测试相等之前，会对两个操作数进行类型转换，会产生一些不可预见的行为，但是 Object.is()不会产生不可预见的行为

/**
 * Object.keys()
 */

/**
 * Object.values()
 */

/**
 * Object.seal()
 */
// Object.seal()：密封一个对象，密封一个对象会阻止其扩展并且使得现有属性不可配置。密封对象有一组固定的属性：不能添加新属性、不能删除现有属性或更改
//  其可枚举性和可配置性、不能重新分配其原型只要现有属性的值是可写的，它们仍然可以更改
// ! 不同于 Object.freeze() 的是，通过 Object.seal() 密封的对象可以更改其现有属性，只要它们是可写的。

/**
 * Object.isSealed()
 */

/**
 * Object.isExtensible()
 */

// todo 实例方法
/**
 * Object.prototype.hasOwnProperty()
 */

/**
 * Object.prototype.isPrototypeOf()
 */

/**
 * Object.prototype.propertyIsEnumerable()
 */

/**
 * Object.prototype.toLocaleString()
 */
