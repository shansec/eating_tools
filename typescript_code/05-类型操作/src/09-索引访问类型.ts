type Person = {
  age: number,
  name: string,
  alive: boolean
}

type Age = Person['age']

// 不能将类型“string”分配给类型“number”。
// const age:Age = 'aa'

type I1 = Person['age' | 'name']
// i1 的类型为 number|string
// const i1: I1 = false
type I2 = Person[keyof Person]
const i2: I2 = false
