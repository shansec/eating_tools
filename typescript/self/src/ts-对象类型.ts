// 对象类型声明
type myObj = {
  x: number
  y: number
  add: (x: number, y: number) => number
}
const obj: myObj = {
  x: 1,
  y: 2,
  add: function (a: number, b: number): number {
    return a + b;
  }
}

// 属性名的索引类型
type myPro = {
  [index: number]: string
  [index2: string]: number | string   // 如果对象有数值索引和字符串索引，那么当发生冲突时数值索引需要服从字符串索引
}
// const pro: myPro = [1, 2, 3]
