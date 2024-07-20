// 属性的简洁表示法
//  属性简写
const foo = "bar";
const baz = {foo};
console.log(baz.foo);
//  方法简写
const o = {
  method() {
    return "Hello"
  }
}
console.log(o.method());

// 属性名表达式
let propKey = 'foo';
let obj = {
  [propKey]: true,
  // 这种命名方式同样适用于方法名
  ['a' + 'bc']: 123
}
console.log(obj.foo, obj['a' + 'bc']);

// 属性的遍历
//  for...in 循环遍历对象自身的和继承的可枚举属性
//  object.keys()返回一个数组，包括对象自身（不含继承属性）所有可枚举属性的键名
//  Object.getOwnPropertyNames返回一个数组，包含对象的所有属性（包括不可枚举属性）
//  Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性的键名


// super关键字
//  super关键字指向当前对象的原型对象
const proto = {
  foo: 'Hello'
};

const obj1 = {
  foo: 'world',
  find() {
    return super.foo;
  }
};
Object.setPrototypeOf(obj1, proto);
obj1.find();


// 对象的扩展运算符
//  解构赋值
//  解构赋值要求等号右边是一个对象
//  解构赋值必须是最后一个参数
let {x, y, ...z} = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
};
console.log(x, y, z);
