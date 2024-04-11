// apply() 该方法拦截函数的调用、call和apply操作
// apply()方法可以接受三个参数，分别是目标对象、目标对象的上下文对象和目标对象的参数数组
let target = function () {
  return 'I am the target'
};
let handler = {
  apply: function () {
    return 'I am the proxy';
  }
};
let p = new Proxy(target, handler);
console.log(p());
let twice = {
  apply: function (target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
};

function sum(left, right) {
  return left + right;
}

let proxy = new Proxy(sum, twice);
console.log(proxy(1, 2));
console.log(proxy.call(null, 7, 8));
console.log(proxy.apply(null, [8, 9]));

// has() 方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效
// 该方法接受两个参数，分别是目标对象，需要查询的属性名
let handler3 = {
  has: function (target, key) {
    if (key[0] === '_') {
      return false;
    }
    return key in target;
  }
};
let target1 = {
  _prop: 'foo',
  prop: 'foo'
};
let proxy5 = new Proxy(target1, handler3);
console.log('_prop' in proxy5);
console.log('prop' in proxy5);
// 如果原型对象不可配置或者禁止扩展，has()拦截会报错

// construct() 用于拦截 new 命令，该方法接受三个参数，分别是目标对象、构造函数的参数数组、创建实例对象时new命令作用的构造函数
// construct()返回的必须是一个对象，否则会报错
const p1 = new Proxy(function () {
}, {
  construct: function (target, args) {
    console.log('called:' + args.join(', '));
    return {value: args[0] * 10};
  }
});
console.log((new p1(3)).value);

// deleteProperty() 用于拦截delete操作，该方法抛出错误或者返回false当前属性无法被delete命令删除
let handler4 = {
  deleteProperty: function (target, key) {
    invariant(key, 'delete');
    delete target[key];
    return true;
  }
};

function invariant(key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action}`);
  }
};
let target2 = {_prop: 'foo', prop: 'foo'};
let proxy6 = new Proxy(target2, handler4);
delete proxy6.prop;
console.log(target2);

// defineProperty()方法拦截了Object.defineProperty()操作。

// getOwnPropertyDescriptor()方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined

// getPrototypeOf()方法主要用来拦截获取对象原型

// isExtensible()方法拦截Object.isExtensible()操作

// ownKeys() 用来拦截对象自身属性的读取操作，具体来说拦截以下操作：
//  Object.getOwnPropertyNames()
//  Object.getOwnPropertySymbols()
//  Object.keys()
//  for...in循环
let target3 = {
  a: 1,
  b: 2,
  c: 3
};
let handler5 = {
  ownKeys(target3) {
    return ['a'];
  }
};
let proxy7 = new Proxy(target3, handler5);
console.log(Object.keys(proxy7));
// 注意：使用Object.keys()方法时，有三类属性会被ownKeys()方法自动过滤，不会返回。
//  目标对象上不存在的属性
//  属性名为Symbol值
//  不可遍历 的属性

// preventExtensions()方法拦截Object.preventExtensions()，该方法必须返回一个布尔值，否则会被自动转为布尔值

// setPrototypeOf()方法主要用来拦截Object.setPrototypeOf()方法


// Proxy.revocable() 该方法返回一个可取消的Proxy实例
let target4 = {};
let handler6 = {};
let {proxy8, revoke} = Proxy.revocable(target4, handler6);
proxy8.foo = 123;
console.log(proxy8.foo);
