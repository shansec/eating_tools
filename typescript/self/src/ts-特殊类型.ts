// 特殊类型包括 any unknown never
// any
// 当给一个变量设置 any 类型的时候，实际上会关掉对这个变量的类型校验，只要语法正确就不会报错
// 针对类型推断问题，当 ts 不能推断出变量的类型时，就会给变量设置成 any 类型
let anyVariable: any;
anyVariable = 1;
anyVariable = true;
anyVariable(1)

// unknown
// unknown 类型和 any 类型相似之处在于任何类型的变量都可以赋值给 unknown 类型变量，但是 unknown 类型变量有以下限制
// 1. unknown 类型的变量不能直接赋值给其它类型的变量
let unknownVariableA: unknown = 1;
let variableB: number;
// variableB = unknownVariableA;  // 报错
// 2. unknown 类型的变量不能直接调用变量的方法和属性
let unknownVariableB: unknown = { a: 1 }
// 3. unknown 类型的变量只能进行比较运算、取反运算、typeof 和 instanceof 操作

// never
