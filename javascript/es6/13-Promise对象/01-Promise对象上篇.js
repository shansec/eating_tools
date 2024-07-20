const promise = new Promise(function (resolve, reject) {
  // if(1) {
  //     resolve(value);
  // } else {
  //     reject(error);
  // }
});
// Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject，
//  这是两个函数，由JavaScript引擎提供
// resolve函数的作用，将Promise对象的状态从“未完成”变成“成功”，在异步操作成功时调用，并将
//  异步操作的结果作为参数传递出去
// reject函数的作用是将Promise对象的状态从“未完成”变为“失败”,在异步操作失败时调用并将
//  异步操作的结果作为参数传递出去
promise.then(function (value) {
  // success
}, function (error) {
  // error
});

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  })
}

timeout(100).then((value) => {
  console.log(value);
})
let promise1 = new Promise((resolve, reject) => {
  console.log('Promise');
  resolve();
});
// then方法在所有同步任务执行完才会执行
promise1.then(() => {
  console.log('resolved.');
});
console.log('Hi!');
// 用Promise对象实现Ajax操作
const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
};
getJSON("/posts.json").then(function (json) {
  console.log('Contents:' + json);
}, function (error) {
  console.log('出错了', error);
});
// p1的状态就会传递p2，也就是说p1的状态决定了p2的状态如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；
//  如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000);
});
p2.then(result => console.log(result)).catch(error => console.log(error));
// 一般来说，调用resolve或reject以后，Promise的使命就完成了，后继操作应该放在then方法里面，所以最好在
//  resolve或reject前面加上return语句


// Promise.prototype.then()
// then方法返回的是一个新的Promise实例（不是原来那个Promise实例）因此可以采用链式写法
// 采用链式的方法调用then,会将前一个返回结果作为参数传入第二个回调函数

// Promise.prototype.catch()
// Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名
//  用于指定发生错误时的回调函数
getJSON('/posts.json').then(function (posts) {
  console.log('成功');
}).catch(function (error) {
  console.log('发生错误', error);
});
// 如果状态变成resolved则会调用then()方法指定的回调函数，如果异步操作抛出错误或者是执行then()里面的回
//  调函数发生错误都会被catch()方法捕获

// Promise.prototype.finally()
// 该方法不管promise对象最后状态如何都会被执行

// Promise.all()
// 该方法可以将多个Promise实例包装成一个新的Promise实例
const p3 = Promise.all([p1, p2]);
// p3的状态由 p1和p2共同决定，分为两种情况：
//  （1）只有两者的状态都变成了fulfilled,p3的状态才会变成fulfilled，p1和p2的返回值组成一个数组，
//      传递给p3的回调函数
//  （2）只要两者中有一个被rejected，p3的状态就变成了rejected，第一个被rejected的实例的返回结果
//      作为参数传递给p3

// Promise.race()
// 该方法也是将多个promise实例包装成一个新的promise实例，但是与all()方法不同之处在于，在race()方法中
//  只要有一个实例的状态发生改变，p3的状态就发生改变，最先发生改变的实例的返回结果作为参数传递给p3
