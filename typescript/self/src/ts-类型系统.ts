// 大写类型同时包含包装对象和字面量两种情况，小写类型只包含字面量，不包含包装对象。
const variableStr: string = 'str';
console.log(variableStr.charAt(1));
const variableObj: String = 'obj';
console.log(variableObj.charAt(1));

// Object 和 object 的区别
// Object 是广泛对象，所有可以转换成对象的值都是 Object 对象
let variableOfObject: Object;
variableOfObject = 1;
variableOfObject = '1'
variableOfObject = true
variableOfObject = (a: number) => a + 1
// variableOfObject = null
// variableOfObject = undefined   // null undefined 类型变量不能赋值给 Object 类型变量
variableOfObject = String('1')
variableOfObject = Number(1)
// object 是狭义对象，可以用字面量表示的对象，包括对象、数组、函数
let variableOfobject: object
// variableOfobject = 1
// variableOfobject = '1'
// variableOfobject = true    // 原始类型变量不能赋值给 object 类型变量
variableOfobject = Array<number>(3)
variableOfobject = (b: string) => b + '1'

// 字面量类型
let variableX: 1 | 2;
variableX = 2