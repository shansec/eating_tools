// 下推类型参数
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0]
}

const a = firstElement1([1, 2, 3])
const b = firstElement2([1, 2, 3])

// 使用更少的类型参数
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean) {
  return arr.filter(func)
}

function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func) {
  return arr.filter(func)
}

// 类型参数应该出现两次
function greet<Str extends string>(s: Str) {
  console.log(s);
}

function greet2(s: string) {
  console.log(s);
}