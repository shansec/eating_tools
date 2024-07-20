// 在使用普通的属性访问表达式时，如果.或[]左侧的表达式求值为null或undefined，会报TypeError。可以使用?.或?.[]语法防止这种错误发生。
// 可选链接
let a = { b: null }
console.log()
console.log(a.b?.c.d)

// 调用表达式之条件式调用
function square(x, log) {
  // 如果传入了可选参数，调用这个函数
  if (log) {
    log(x)
  } else {
    return x**2
  }
}
// ES2020 条件式调用
function square_2020(x, log) {
  // ?.() 只会检查左侧的值是不是 null 和 undefined，不会验证该值是不是函数
  log?.(x)
  return x**2
}
