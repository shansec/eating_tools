// 代理对象上
let t = {x: 1, y: 2}
let p = new Proxy(t, {})
console.log(p.x)
delete p.y
console.log(t.y)

// Proxy可以理解成在目标对象之前架设一层拦截，外界对该对象的访问，都必须通过这层拦截
let obj = new Proxy({}, {
  get: function(target, propKey, receiver) {
    console.log(`getter ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function(target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
})
console.log(obj.count = 1);
console.log(++obj.count);
// es6提供了原生Proxy构造函数，用来生成Proxy实例
// let proxy = new Proxy(target, handler)
// target表示所要拦截的目标对象，handler用来定制拦截行为
let proxy = new Proxy({}, {
  get: function(target, propKey) {
    return 35;
  }
})
console.log(proxy.time);
console.log(proxy.name);
// Proxy也可以作为其它对象的原型对象
let proxy1 = new Proxy({}, {
  get: function(target, handler) {
    return 35;
  }
})
let obj1 = Object.create(proxy1);
console.log(obj1.time);
// 同一个拦截器函数可以设置拦截多个操作
let handler = {
  get: function(target, name) {
    if(name == 'prototype') {
      return Object.prototype;
    }
    return 'Hello,' + name;
  },
  apply: function(target, thisBinding, args) {
    return args[0];
  },
  construct: function(target, args) {
    return {
      value: args[1]
    };
  }
}
let fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);
console.log(fproxy(1, 2));
console.log(new fproxy(1, 2));

// Proxy支持的拦截操作
// get(target,propKey,receiver) 拦截对象属性的操作
// set(target,propKey,value,receiver) 拦截对象属性的设置
// has(target,propKey) 拦截 propKey in proxy 的操作
// deleteProperty(target,propKey) 拦截 delete proxy[propKey] 的操作，返回一个布尔值
// ownKeys(target) 拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)
// Object.keys(proxy)、for...in循环，返回一个数组
// getOwnPropertyDescriptor(target,propKey) 拦截 Object.getOwnPropertyDescriptor(proxy,propKey),返回属性的描述对象
// defineProperty(target, propKey, propDesc) 拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
// preventExtensions(target) 拦截Object.preventExtensions(proxy)，返回一个布尔值
// getPrototypeOf(target) 拦截Object.getPrototypeOf(proxy)，返回一个对象
// isExtensible(target) 拦截Object.isExtensible(proxy)，返回一个布尔值
// setPrototypeOf(target, proto) 拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截
// apply(target, object, args) 拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
// construct(target, args) 拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)

// Proxy实例的方法
// get()用于拦截某个属性的读取操作，可以接受三个参数，分别为目标对象、属性名、proxy实例本身（可选）
let person = {
  name: '张三'
};
let proxy2 = new Proxy(person, {
  get: function(target, propKey) {
    if(propKey in target) {
      return target[propKey];
    }else {
      return new ReferenceError("Prop name \"" + propKey + "\" does not exit.");
    }
  }
});
console.log(proxy2.name);
// console.log(proxy2.age);
// get 方法可以继承
let proto = new Proxy({}, {
  get: function(target, propKey, receiver) {
    console.log('GET ' + propKey);
    return target[propKey];
  }
});
let obj2 = Object.create(proto);
console.log(obj2.foo);
// get 方法可以实现数组读取负数的索引
function createArray(...elements) {
  let handler = {
    get: function(target, propKey, receiver) {
      let index = Number(propKey);
      if(index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver)
    }
  };
  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}
let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);
// get方法的第三个参数指向proxy对象
const proxy3 = new Proxy({}, {
  get: function(target, key, receiver) {
    return receiver
  }
});
console.log(proxy3.getReceiver == proxy3);
// 如果一个属性不可配置(configurable)且不可写，则Proxy不能修改该属性

// set 方法用来拦截某个属性的赋值操作，可以接受四个参数，分别是目标对象、属性名、属性值和Proxy实例本身(可选)
let validator = {
  set: function(obj, prop, value) {
    if(prop === 'age') {
      if(!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if(value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }
    obj[prop] = value;
    return true;
  }
};
let person2 = new Proxy({}, validator);
person2.age = 100;
console.log(person2.age);
// person2.age = 300;
// 可以利用get和set方法实现防止对象的内部属性被外界读取
const handler2 = {
  get: function(target, key) {
    invariant(key, 'get')
    return target[key];
  },
  set: function(target, key, value) {
    invariant(key, 'set');
    target[key] = value;
    return true;
  }
};
function invariant(key, action) {
  if(key[0] === '_') {
    throw new Error(`Invalid attempt to ${action}`);
  }
};
let  target = {};
const proxy4 = new Proxy(target, handler2);
// console.log(proxy4._prop);
// proxy4._prop = 'c';
