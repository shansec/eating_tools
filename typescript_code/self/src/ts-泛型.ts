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