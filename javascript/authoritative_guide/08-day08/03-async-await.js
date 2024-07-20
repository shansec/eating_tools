// async 和 await
// async 和 await 关键字让我们可以用一种更简洁的方式写出基于 Promise 的异步行为，而无需刻意地链式调用 promise。
// await关键字只在 async 函数内有效。
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved')
    }, 2000)
  })
}

async function asyncFunc() {
  console.log('calling')
  const result = await resolveAfter2Seconds()
  console.log(result)
}

// asyncFunc()

// await 后面跟的表达式不是 promise对象，await 会把该值转换成已兑换的 promise
async function f3() {
  const y = await 20;
  console.log(y)

  const obj = {}

  console.log((await obj) === obj)
}

f3()
