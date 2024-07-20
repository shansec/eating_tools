// 泛型约束
interface LengthWise {
  length: number
}

function loggingIdentity<Type extends LengthWise>(parameter: Type): Type {
  console.log(parameter.length)
  return parameter
}

// TS2345: Argument of type 'number' is not assignable to parameter of type 'LengthWise'.
// loggingIdentity<number>(123)
loggingIdentity('123')
loggingIdentity([1, 2, 3])
loggingIdentity({ length: 10, value: 3})
