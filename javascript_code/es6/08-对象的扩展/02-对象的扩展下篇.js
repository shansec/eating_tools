// Object.is()
// 用来比较两个值是否严格相等，与严格比较运算符基本一致
console.log(Object.is('foo', 'foo'));
console.log(Object.is({}, {}));
console.log(Object.is(+0, -0));
console.log(Object.is(NaN, NaN));


// Object.assign()
// 用于对象的合并，将源对象的所有可枚举属性，复制到目标对象
// 目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
// 注意：
//      Object.assign()方法实行的是**浅拷贝**，而不是深拷贝。
//      Object.assign()处理数组时,会把数组当做对象
//      Object.assign()只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制

const target = {a: 1};
const source1 = {b: 2};
const source2 = {c: 3};

Object.assign(target, source1, source2);
console.log(target);
// Object.assign()常见用途
//  为对象添加属性
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y})
  }
}

//  为对象添加方法
const SomeClass = {};
// Object.assign(SomeClass.protorype, {
//     someMethod() {},
//     anotherMethod() {}
// })
//  克隆对象
// 通过这种方法克隆对象，只能克隆原始对象自身的值，不能克隆它继承的值
function clone(orgin) {
  return Object.assign({}, orgin);
}

// 如果克隆要保持继承连，可以采用下列方法
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}

// Object.getOwnPropertyDescriptor()
//该方法会返回某个对象属性的描述对象
const obj = {
  foo: 123,
  get bar() {
    return 'abc'
  }
}
Object.getOwnPropertyDescriptors(obj);
console.log(Object.getOwnPropertyDescriptors(obj));


// __proto__属性
// Object.setPrototypeOf()
// 该方法的作用于__proto__相同，用来设置一个对象的原型对象，返回参数对象本身
let proto = {};
let obj1 = {x: 10};
Object.setPrototypeOf(obj1, proto);
proto.y = 20;
proto.z = 40;
console.log(obj1.x, obj1.y, obj1.z);
// 用来读取一个对象的原型对象
console.log(Object.getPrototypeOf(obj1));

// Object.keys()
// Object.values()
// Object.entries()

// Object.fromEntries()
// 该方法是 Object.entries()的逆操作，用于将一个键值对转换为对象
let obj2 = Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
]);
console.log(obj2);
const map = new Map().set('foo', true).set('bar', false);
let obj3 = Object.fromEntries(map);
console.log(obj3);
