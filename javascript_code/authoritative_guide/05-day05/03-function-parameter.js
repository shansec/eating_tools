// 函数之函数形参和实参

function getPropertyNames(o, a = []) {
  for (let property in o) {
    a.push(property)
  }
  return a;
}
// 函数的形参默认值表达式会在函数调用时求值，不会在定义时求值。
let result = getPropertyNames([1, 2, 3])
console.log(result)

// 剩余形参与可变长度实参列表
// 在函数体内，剩余形参的值始终是数组。数组有可能为空，但剩余形参永远不可能是 undefined
function max(first=-Infinity, ...rest) {
  let maxValue = first;
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n
    }
  }
  return maxValue;
}
let maxVvalue = max(1, 50000, 300, 4000)
console.log(maxVvalue);
// 通过 Arguments 对象实现上述函数
function max_arguments(x) {
  let maxValue = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i];
  }
  return maxValue;
}
let maxValue_arguments = max(1, 10, 2, 3, 1000, 5, 6)
console.log(maxValue_arguments)
