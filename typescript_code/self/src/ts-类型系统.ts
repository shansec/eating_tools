// 大写类型同时包含包装对象和字面量两种情况，小写类型只包含字面量，不包含包装对象。
const variableStr: string = 'str';
console.log(variableStr.charAt(1));
const variableObj: String = 'obj';
console.log(variableObj.charAt(1));

