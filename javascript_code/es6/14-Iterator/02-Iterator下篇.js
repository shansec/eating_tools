// 调用Iterator接口的场合
//  解构赋值
let set = new Set().add('a').add('b').add('c');
let [x, y] = set;
let [first, ...rest] = set;
console.log(x, y);
console.log(first, rest);
//  扩展运算符
let str = 'hello';
console.log([...str]);
let arr = ['b', 'c'];
console.log(['a', ...arr, 'd']);
//  yield*
//  yield* 后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口
let generator = function* () {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
};
let iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 字符串的Iterator接口
let someString = "may";
console.log(typeof someString[Symbol.iterator]);
let iterator2 = someString[Symbol.iterator]();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

// 遍历器对象的return()、throw()
// return()方法的使用场合，for...of循环提前退出或者是一个对象在完成遍历之前需要清理或释放资源，就会调用
//  return()方法
function readLinesSync(file) {
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return {done: false};
        },
        return() {
          file.close();
          return {done: true};
        }
      };
    }
  };
}

// 下面两种情况，都会触发执行return()方法
// for(let line of readLinesSync(fileName)) {
//     console.log(line);
//     break;
// }
// for(let line of readLinesSync(fileName)) {
//     console.log(line);
//     throw new Error();
// }

// for...of循环


// js提供的四种遍历方式
// for
//  写法比较麻烦
// forEach
//  代码量减少，但是无法中途跳出循环，break和return命令都不奏效
// for...in
//  为遍历对象而设计的，不适合用于遍历数组
//  数组的键名是数字，但是for...in循环是以字符串作为键名
//  for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键
//  某些情况下，for...in循环会以任意顺序遍历键名
// for...of
