// keyof 运算符
type myObjKeyof = {
  a: string
  b: number
}
type keys = keyof myObjKeyof
let aKeys:keys =  'a'
interface T {
  [prop: string]: number
}
type keyT = keyof T
// 对于联合类型，keyof 返回成员共有的键名。
// 对于交叉类型，keyof 返回所有键名。
type Aa = {
  a: string
  z: boolean
}
type Bb = {
  b: string
  z: boolean
}
type keyZ = keyof (Aa | Bb)