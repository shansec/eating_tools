const n = 1;
// expr as T
// 类型断言的条件是 expr 是 T 的子类型，或者 T 是 expr 的子类型
// 如果需要断言成无相关的类型的话，需要两次断言，先断言成 any 或者 unknow, 然后再断言成其它类型
const n1:string = n as unknown as string;

// as const 
// let 命令声明的变量，会被类型推断为 TypeScript 内置的基本类型之一；const 命令声明的变量，则被推断为值类型常量。
let s1 = 'javascript';
const s2 = 'typescript';

// 断言函数
function isString(value:unknown):asserts value is string {
  if (typeof value !== 'string')
    throw new Error('Not a string');
}
