// 指定类型参数
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// 不能将类型“string”分配给类型“number”。
const arr = combine<number | string>([1, 2, 3], ['string'])
