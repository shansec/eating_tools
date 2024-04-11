// Reflect和Proxy对象一样，是es6为了操作对象而提供的心Api，设计的目的有：
//  将Object对象的一些明显属于语言内部的方法放到Reflect对象上
//  修改某些Object方法的返回结果，让其变得更合理
//  让Object操作都变成函数行为
//  Reflect对象的方法与Proxy对象的方法一一对应，只要Proxy对象的方法就能在Reflect对象上找到对应的方法
//   这就让Proxy对象可以方便的调用对应的Reflect方法，完成默认行为，作为修改行为的基础
let loggedObj = new Proxy({}, {
  get: function (target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty: function (target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);
  },
  has: function (target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
})

// Reflect静态方法
// Reflect.apply(target, thisArg, args)
// Reflect.construct(target, args)
// Reflect.get(target, name, receiver)
// Reflect.set(target, name, value, receiver)
// Reflect.defineProperty(target, name, desc)
// Reflect.deleteProperty(target, name)
// Reflect.has(target, name)
// Reflect.ownKeys(target)
// Reflect.isExtensible(target)
// Reflect.preventExtensions(target)
// Reflect.getOwnPropertyDescriptor(target, name)
// Reflect.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)

// Reflect.get(target, name, receiver)查找并返回target对象的name属性，如果没有这个属性则返回undefined
let myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  }
}
console.log(Reflect.get(myObject, 'foo'));
console.log(Reflect.get(myObject, 'baz'));
// 如果get方法的第一个参数不是一个对象，该方法会报错

// Reflect.set(target, name, value, receiver)设置target对象的那么属性等于value
let myObject1 = {
  foo: 1,
  bar: 2,
  set bar(value) {
    return this.foo = value;
  }
}
Reflect.set(myObject1, 'foo', 4);
console.log(myObject1.foo);
// 如果name属性设置了赋值函数，则赋值函数this绑定receiver
let myReceiver = {foo: 0};
Reflect.set(myObject1, 'bar', 1, myReceiver)
console.log(myReceiver.foo);

// Reflect.has(target, name)对应 in 运算符

// Reflect.deleteProperty(target, name)用于删除对象的属性
const myObj = {
  foo: 'bar',
  baz: 'baz'
};
Reflect.deleteProperty(myObj, 'foo');
console.log(myObj);

// Reflect.construct(target, args)该方法等同于new target(...args)提供了一种不使用new来调用构造函数的方法
function Greeting(name) {
  this.name = name;
}

const greeting1 = new Greeting('战三');
const greeting2 = Reflect.construct(Greeting, ['展示']);
console.log(greeting1);
console.log(greeting2);

// Reflect.setPrototypeOf(target, prototype)
