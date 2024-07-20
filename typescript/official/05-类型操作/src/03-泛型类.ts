// 泛型类
class GenericNUmber<NumType> {
  zeroVal: NumType
  add: (x: NumType, y: NumType) => NumType
}

// number 类型
let myGenericNumber = new GenericNUmber<number>()
myGenericNumber.zeroVal = 10
myGenericNumber.add = function(x, y) {
  return x + y
}

// string 类型
let myGenericString = new GenericNUmber<string>()
myGenericString.zeroVal = '10'
myGenericString.add = function(x, y) {
  return x + y
}