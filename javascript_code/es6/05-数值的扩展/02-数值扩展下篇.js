// parseInt() 和 parseFloat()

// Number.isInteger() 用来判断一个数值是否为整数

// Number.EPSILON 新增的一个极小的常量，表示 1 与 大于1 的最小浮点数之间的差

// Math对象的扩展
// 用于除去一个数的小数部分，对于非数值，先使用Number方法将其转为数值
console.log(Math.trunc(4.1));
console.log(Math.trunc(-0.1));

// 用来判断一个数到底是正数还是负数
// 返回值有五种
//  参数为正数，返回 +1
//  参数为负数，返回 -1
//  参数为0，返回 0
//  参数为-0，返回 -0
//  参数为其它值，返回NaN
console.log(Math.sign(4));
console.log(Math.sign(0));
console.log(Math.sign(-4));

// Math.cbrt() 用于计算一个数的立方根

// 返回的值是两个数相乘的结果
console.log(Math.imul(2, 4));
console.log(Math.imul(2, -4));

// 用于返回所有参数的平方和的平方根
console.log(Math.hypot(3, 4));
console.log(Math.hypot(6, 8));
console.log(Math.hypot(6, 8, 10));


// 数值大于等于2的1024次方的数值，计算没有办法表示，返回infinity，引入了一种新的数据类型 BigInt
console.log(Math.pow(2, 1024));
// BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示
// 为了区别Number BigInt类型的数据必须添加后缀 n
console.log(1n + 2n);