// 在泛型约束中使用类型参数
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

let x = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

getProperty(x, 'a')
getProperty(x, 'b')
getProperty(x, 'c')
// 类型“"e"”的参数不能赋给类型“"a" | "b" | "c" | "d"”的参数。
// getProperty(x, 'e')