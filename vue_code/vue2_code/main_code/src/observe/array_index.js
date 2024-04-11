// 重写数组
// 1、获取原来的数组方法
let oldArrayProtoMethods = Array.prototype

// 2、继承
export let ArrayMethods = Object.create(oldArrayProtoMethods)

// 3、劫持
let methods = [
  "push",
  "pop",
  "unshift",
  "shift",
  "splice"
]
methods.forEach(method => {
  ArrayMethods[method] = function (...args) {
    // console.log('劫持数组', method)
    let result = oldArrayProtoMethods[method].apply(this, args)
    // console.log(args)
    // 数组追加对象
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.splice(2)
        break
    }
    // console.log('inserted', inserted)
    let ob = this.__ob__
    if (inserted) {
      ob.observeArray(inserted)
    }
    return result
  }
})
