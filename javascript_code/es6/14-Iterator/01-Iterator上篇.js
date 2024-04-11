// Iterator是一种接口，为各种不同的数据结构提供统一的访问机制，任何部署了Iterator接口的数据结构都
//  可以完成遍历操作
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ?
          {value: array[nextIndex++], done: false} :
          {done: true}
    }
  }
};
let it = makeIterator(['a', 'b']);
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 默认Iterator接口
// Es6规定，默认的Iterator接口部署在数据解构的Symbol.iterator属性
const obj = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        }
      }
    }
  }
};
let arr = ['a', 'b', 'c'];
// 调用数组的Symbol.iterator属性就得到了一个遍历器对象
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

class RangeInterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return {value: value, done: false}
    }
    return {value: undefined, done: true}
  }
}

function range(start, stop) {
  return new RangeInterator(start, stop)
}

for (let value of range(0, 3)) {
  console.log(value);
}

// 通过遍历器实现“链表结构”
function Obj(value) {
  this.value = value;
  this.next = null;
}

Obj.prototype[Symbol.iterator] = function () {
  var iterator = {next: next};
  var current = this;

  function next() {
    if (current) {
      var value = current.value;
      current = current.next;
      return {done: false, value: value}
    }
    return {done: true}
  }

  return iterator;
}
let one = new Obj(1);
let two = new Obj(2);
let three = new Obj(3);
one.next = two;
two.next = three;
for (let i of one) {
  console.log(i);
}
// 给对象添加Iterator接口
let obj2 = {
  data: ['hello', 'world!'],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          }
        }
        return {value: undefined, done: true}
      }
    }
  }
};
let arr1 = obj2[Symbol.iterator]()
console.log(arr1.next());
console.log(arr1.next());
console.log(arr1.next());
// 类似于数组的对象可以直接调用Symbol.iterator方法
let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let i of iterable) {
  console.log(i);
}
