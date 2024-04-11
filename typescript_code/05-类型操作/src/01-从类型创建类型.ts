function loggingIdentity<Type>(arg: Type): Type {
  // 类型“Type”上不存在属性“length”。
  // console.log(arg.length);
  return arg
}

function loggingIdentityV<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg
}

loggingIdentityV('hello')
// 类型“number”的参数不能赋给类型“{ length: number; }”的参数。
// loggingIdentityV(123456)