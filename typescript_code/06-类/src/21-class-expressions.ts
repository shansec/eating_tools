// 匿名类
const someClass = class<Type> {
  content: Type

  constructor(value: Type) {
    this.content = value
  }
}
const someclass = new someClass('hello')
console.log(someclass.content);
