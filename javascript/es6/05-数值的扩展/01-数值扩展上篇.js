// 二进制和八进制表示法
console.log(0b111110111 === 503);
(function () {
  console.log(0o11 === 011);
})();
console.log(Number(0b111));

// 数值分隔符
// 数值分隔符允许每三位添加一个分隔符
//  使用分隔符需要注意
//      1. 不能在数值的最前面和最后面使用
//      2. 不能两个或者是两个以上分割一起使用
//      3. 小数点的前后不能有分隔符
// 分隔符只是一种书写便利，在内部存储和传输的时候，不会存在数值分隔符

// Number.isFinite 用来检查一个数值是否有限
// Number.isNaN 用来检查一个值是否为 NaN
console.log(Number.isFinite(51));
console.log(Number.isFinite(1.8));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log('-----NaN-----');
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(15));
console.log(Number.isNaN('15'));
console.log(Number.isNaN(true));
