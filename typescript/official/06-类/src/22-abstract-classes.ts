abstract class Base_abstract {
  abstract getName(): string
  printName() {
    console.log(this.getName)
  }
}

// 无法创建抽象类的实例。
// const b = new Base_abstract()
class Derived1 extends Base_abstract {
  getName(): string {
    return 'string'
  }
}