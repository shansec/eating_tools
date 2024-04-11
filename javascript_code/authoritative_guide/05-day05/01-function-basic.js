// 函数之函数基础
// 函数声明语句会被提升到代码块的顶部
// 在一个JavaScript代码块中声明的所有函数在该块的任何地方都有定义，
//    而且它们会在JavaScript解释器开始执行该块中的任何代码之前被定义。

// 函数声明
function printProps(o) {
  for (let p in o) {
    console.log(`${p}: ${o[p]}\n`)
  }
}
// 函数表达式
const square = function (x) { return x**2 }
[3, 2, 1].sort(function (a, b) { return a-b; })
// 函数声明实际上会声明一个变量，然后把函数对象赋值给它。函数表达式不会声明变量，要把新定义的函数赋值给谁取决于自己。

// 箭头函数
// 嵌套函数 