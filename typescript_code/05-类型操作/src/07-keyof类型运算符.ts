type Point = {
  x: number,
  y: number
}

type P = keyof Point

const p1:P = 'x'
const p2:P = 'y'

// 不能将类型“"z"”分配给类型“keyof Point”。
// const p3:P = 'z'

type Arrayish = {
  [n: number]: unknown
}

type A = keyof Arrayish
const a:A = 5
// 不能将类型“string”分配给类型“number”。
// const a1:A = '5'

type Person1 = {
  name: string,
  age: number
}

type per = keyof Person1

const person: per = 'name'
const person2: per = 'age'

type array = {
  [index: number]: string
}

type arr = keyof array

const b: arr = 123
