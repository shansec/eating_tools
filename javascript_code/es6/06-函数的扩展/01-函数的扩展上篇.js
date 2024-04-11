// 函数参数的默认值
//  注意：
//      1、参数变量是默认声明的，不能用 let 或者 const 再次声明
//      2、使用参数默认值时，函数不能有同名参数
//      3、参数默认值不是传值，而是每次都重新计算默认值表达式
function log(x, y = 'world') {
  console.log(x, y);
}

log('Hello');
log('Hello', 'China');
log('Hello', '');


// 解构赋值默认值结合使用
function foo({x, y = 5} = {}) {
  console.log(x, y);
}

foo({})
foo({x: 1})
foo({x: 1, y: 2})
// 通过给函数参数设置默认值可以解决这种调用方式出现的错误
foo()


// 参数默认值的位置

// 函数的 length 属性
// 指定了默认值以后，函数的length属性将返回没有指定默认值参数的个数
console.log((function (a) {
}).length);
console.log((function (a = 5) {
}).length);

// 作用域
// 设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域


// rese参数
function add(...values) {
  let sum = 0;
  for (let val of values) {
    sum += val;
  }
  return sum;
}

console.log(add(3, 4, 5));
const sortNum = (...numbers) => numbers.sort();
console.log(sortNum(7, 5, 9, 6));
