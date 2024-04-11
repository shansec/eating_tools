// 泛型类型
function identity<Type>(arg: Type): Type {
  return arg
}

// let myIdentity: <Type>(arg: Type) => Type = identity
let myIdentity: <Input>(arg: Input) => Input = identity

interface GenericIdentityFn {
  <T>(arg: T): T
}

let myIden: GenericIdentityFn = identity