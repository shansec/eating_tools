const m = new Map();
const o = {p: 'Hello'};
m.set(o, 'content');
console.log(m.get(o));
// map可以接受一个数组作为参数，该数组的成员是一个表示键值对的数组
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);
console.log(map.size);
console.log(map.get('name'));
console.log(map.get('title'));
const items = [
  ['name', '李四'],
  ['title', 'programmer']
];
const map1 = new Map();
items.forEach(([key, value]) => map1.set(key, value));
console.log(map1.get('name'));
console.log(map1.get('title'));
// 事实上任何具有Iterator接口，且每个成员都是一个双元素的数据的数据解构都可以
// 作为Map构造函数的参数
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
console.log(m1.get('foo'));
const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
console.log(m3.get('baz'));
// 注意：只有对同一个对象的引用，Map解构才将其视为同一个键
const map4 = new Map();
map4.set('a', 555);
console.log(map4.get('a'));

const map2 = new Map();
const k1 = ['a'];
const k2 = ['a'];
map2
    .set(k1, 111)
    .set(k2, 222);
console.log(map2.get(k1));
console.log(map2.get(k2));
// 由上面代码可知，Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就被视为两个键。

// 实例的属性和方法
// size方法
// Map.prototype.set(key, value) 该方法可以采用链式写法
// Map.prototype.get(key) 该方法读取key对应的键值，如果找不到返回undefined
// Map.prototype.has(key) 该方法判断某个键是否在当前Map对象之中
// Map.prototype.delete(key) 该方法删除某个键，返回删除的结果，true或false
// Map.prototype.clear() 该方法清除所有成员，没有返回值


// 遍历方法
// Map.prototype.keys() 返回键名的遍历器。
// Map.prototype.values() 返回键值的遍历器。
// Map.prototype.entries() 返回所有成员的遍历器。
// Map.prototype.forEach() 遍历 Map 的所有成员

// Map与其它数据解构的的互相转换
// Map转为数组
// 使用扩展运算符把map转为数组
const myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
console.log([...myMap]);
// 数组转为Map
// 将数组传入Map构造函数，就可以转为Map
const m4 = new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
]);
console.log(m4);
// Map转为对象
// 如果所有Map的键都是字符串，它可以无损地转为对象，
// 如果有非字符串的键名，那么这个键名会被转成字符串，再做为对象的键名
function strMapToObj(strMap) {
  let obj = new Object(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj
}

const myMap2 = new Map().set('yes', true).set('no', false);
console.log(strMapToObj(myMap2));
// 对象转为Map
// 对象转为Map可以通过Object.entries(),也可以通过自定义函数实现
let obj = {'a': 1, 'b': 2};
let map3 = new Map(Object.entries(obj));
console.log(map3);

function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap
}

console.log(objToStrMap(obj));
// Map转为JSON
// 第一种情况。Map的键名都是字符串，这时可以转为对象JSON
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap3 = new Map().set('yes', true).set('no', false);
console.log(strMapToJson(myMap3));
// 第二种情况，Map的键名有非字符串，这时可以选择转为数据JSON


// WeakMap
// WeakMap和Map的区别有两点：
// 第一是WeakMap只接受对象作为键名，不接受其它类型作为键名。
// 第二是WeakMap的键名所指向的对象，不计入垃圾回收机制

// WeakMap的语法
// WeakMap只有四个方法可用：get()/set()/has()/delete()
