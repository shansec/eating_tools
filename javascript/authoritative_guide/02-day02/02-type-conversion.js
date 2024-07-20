// number ——> string
let num = 123.23
console.log('String()方法转换：', String(num))
// Number类定义的toString()方法接收一个可选的参数，用于指定一个基数或底数。
console.log('toString()方法转换：', num.toString(16))

// string ——> number
let str = '123&12'
console.log('Number()方法转换：', Number(str))
console.log('parseInt()方法转换：', parseInt(str))

/**
 * toFixed()把数值转换为字符串时可以指定小数点后面的位数。
 * toExponential()使用指数记数法将数值转换为字符串，结果是小数点前1位，小数点后为指定位数。
 * toPrecision()按照指定的有效数字个数将数值转换为字符串。小数点不算位数
 */
let n = 123456.789
console.log(n.toFixed(0))
console.log(n.toFixed(2))
console.log(n.toExponential(1))
console.log(n.toExponential(2))
console.log(n.toPrecision(7))
console.log(n.toPrecision(10))

// object ——> 原始值
// JavaScript 对象到原始值的转换采用了 3 种基本算法：
//    偏字符串：该算法返回原始值，而且只要有可能就返回字符串；
//    偏数值：该算法返回原始值，只要有可能就返回数值；
//    无偏好：该算法不倾向于任何原始值类型，而是由类定义自己的转换规则；
// 注意：JavaScript 内置类型除了 Date 类都实现了偏数值算法。Date类实现了偏字符串算法。
// 对象转为布尔值：所有的对象都转为 true

// toString()
// 对象
console.log(({ x: 1, y: 2 }).toString());
// 数组
console.log([1, 2, 3].toString());
// 函数
console.log((function (x) { f(x) }).toString());

// valueOf()

// 上述三种对象到原始数值转换算法过程：
// 偏字符串算法首先尝试toString()方法。如果这个方法有定义且返回原始值，则JavaScript使用该原始值（
//  即使这个值不是字符串）。如果toString()不存在，或者存在但返回对象，则JavaScript尝试valueOf()方法。
//  如果这个方法存在且返回原始值，则JavaScript使用该值。否则，转换失败，报TypeError。

// 偏数值算法与偏字符串算法类似，只不过是先尝试valueOf()方法，再尝试toString()方法。

// 无偏好算法取决于被转换对象的类。如果是一个Date对象，则JavaScript使用偏字符串算法。如果是其他类型的对象，
//  则JavaScript使用偏数值算法。
let partial_value = []
console.log(Number(partial_value.toString()));