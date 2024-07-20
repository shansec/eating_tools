// 函数的泛型写法
function funcType<T>(arr: T[]): T {
  return arr[0];
}

// 接口的泛型写法
interface Comparator<T> {
  compareTo(value: T): number
}
class Rectangle implements Comparator<Rectangle> {
  compareTo(value: Rectangle): number {
      return 1;
  }
}

// 类的泛型写法
// class Pair<K, V> {
//   key: K;
//   value: V
// }

// 泛型类型参数的默认值
function getFirst<T = string>(arr: T[]) {
  return arr[0];
}
// ts 会推断出 T 的类型，覆盖默认值
getFirst([1, 2, 3])

// 泛型类型参数的约束条件
function comp<Type extends { length: number }>(a:Type, b:Type) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}