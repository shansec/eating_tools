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

// keyof 运算符的用途
function prop<Obj, K extends keyof Obj> (obj: Obj, key: K): Obj[K] {
  return obj[key]
}
// keyof 的另一个用途是用于属性映射，即将一个类型的所有属性逐一映射成其他值。
type NewProps<Obj> = {
  [Prop in keyof Obj]: boolean
}
type myObjType = { foo: number }
type NewMyObj = NewProps<myObjType>
// keyof 运算符可以给对象属性加上或者取消只读运算符
type objPlusReadonly<Obj> = {
  +readonly [Prop in keyof Obj]: Obj[Prop]
}
type myObjReadonly = {
  readonly foo: string
  zoo: boolean
}
type myPlusReadonlyRes = objPlusReadonly<myObjReadonly>
type objDiminishReadonly<Obj> = {
  -readonly [Prop in keyof Obj]: Obj[Prop]
}
type myObjReadonly2 = {
  readonly foo: string
  zoo: boolean
}
type myDiminishReadonlyRes = objDiminishReadonly<myObjReadonly2>
// keyof 运算符还可以给对象属性加上或者取消是否必选

// extends...?: 条件运算符
// T extends U ? X : Y
interface Animal {
  live: () => void
}
interface Dog extends Animal {
  woof(): void
}
type T1 = Dog extends Animal ? number : string
type T2 = Animal extends Dog ? number : string
/*
 *  (A|B) extends U ? X : Y
 *  等同于
 *  (A extends U ? X : Y) |
 *  (B extends U ? X : Y)
 */
// 如果不希望联合类型被条件运算符展开，可以把`extends`两侧的操作数都放在方括号里面。

// infer 关键字
// infer 关键字用来定义泛型里面推断出来的类型参数，而不是外部传入的类型参数。
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type
type Str = Flatten<string[]>
type Num = Flatten<number>

// is 运算符
type isA = { a: string }
type isB = { b: string }
function isTypeA(x: A|B): x is A {
  if ('a' in x) return true;
  return false;
}

// satisfies 运算
type Colors = "red" | "green" | "blue";
type RGB = [number, number, number];
// const palette: Record<Colors, string|RGB> = {
//   red: [255, 0, 0],
//   green: "#00ff00",
//   blue: [0, 0, 255]
// }
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255]
} satisfies Record<Colors, string|RGB>
palette.green.substring(0, 4)
