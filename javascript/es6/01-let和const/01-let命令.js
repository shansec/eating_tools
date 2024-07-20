/**
 * 只在代码块中有效
 */
{
  let a = 10;
  let b = 5;
}
console.log(a);
// console.log(b);

/**
 * 不存在变量提升
 */
console.log(foo); // undefined
let foo = 2;

console.log(bar); // Cannot access 'bar' before initialization
// let bar = 2;
