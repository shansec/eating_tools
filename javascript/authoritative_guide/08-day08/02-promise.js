// 期约
// .then() 方法需要两个参数，第一个参数作为处理已兑现状态的回调函数，而第二个参数则作为处理已拒绝状态的回调函数。
//    每一个 .then() 方法还会返回一个新生成的 promise 对象，这个对象可被用作链式调用。
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 300)
})

const myPromise2 = new Promise((resolve, reject) => {
  let score = 60
  if (score > 60) {
    console.log('及格')
    resolve('及格')
  } else {
    console.log('不及格')
    reject('不及格')
  }
})

myPromise
    .then(value => {
      return value + ' and bar';
    })
    .then(value => {
      return value + ' and bar again';
    })
    .then(value => {
      return value + ' and again';
    })
    .then(value => {
      return value + ' and again';
    })
    .then(value => {
      console.log(value)
    })
    .catch(err => {
      console.log(err)
    });

// 传入的 promise 对象全部成功之后返回新的 promise 对象，如果有一个对象失败，则拒绝生成新的 promise
// let allPromise = Promise.all([myPromise, myPromise2])
// allPromise.then(res => {
//   console.log(res)
// })

let allSettledPromise = Promise.allSettled([myPromise, myPromise2])
    // [
    //     {status: 'fulfilled', value: 'foo'},
    //     {status: 'rejected', reason: '不及格'}
    // ]
allSettledPromise.then(res => {
  console.log(res)
})
