const delMethod1 = function (txt: string) {
  console.log('hello' + txt);
}

// 类型声明式 txt 不能省略，函数类型里面的参数名与实际参数名，可以不一致。
const delMethod2: (txt: string) => void = function (name) {
  console.log(name);
}

// 通过 type 声明函数类型
type MyFunc = (txt: string) => void
const myFunc: MyFunc = function (name) {}

// 通过 typeof 可以实现一个变量套用一个函数类型
function add (x: number, y: number) {
  return x + y;
}
const myAdd: typeof add = function(x, y) {
  return x + y;
}

// 函数类型对象写法
// 函数类型对象写法
// {
//   (参数列表): 返回值
// }
let addFunc: {
  (x: number, y: number): number
}
addFunc = function (x: number, y: number) {
  return x + y;
}

// 可选参数
let optionParFunc: (x: number, y?: number) => number
optionParFunc = function (x, y) {
  if (y === undefined) {
    return x;
  }
  return x + y;
}

// 参数解构
function parDeconstruction([x, y]: [number, number]) {
  return x + y;
}

// 函数重载
function reverse(str: string): string
function reverse(arr: number[]): number[]
function reverse(param: string | number[]): string | number[] {
  if (typeof param == 'string') {
    return param.split('').reverse().join('')
  } else {
    return param.slice().reverse()
  }
}

// 构造函数类型声明
class Animal {
  numLens: number = 4
}
// type AnimalConstructor = new () => Animal
type AnimalConstructor = {
  new (): Animal
}
function createAnimal(c: AnimalConstructor): Animal {
  return new c()
}
const a = createAnimal(Animal)