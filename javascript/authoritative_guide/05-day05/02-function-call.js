// 函数之函数调用
/** 
 * 调用方式：
 *  - 作为函数
 *  - 作为方法
 *  - 作为构造函数
 *  - 通过 call() 和 apply() 方法
 *  - 通过 JavaScript 语言特性隐式调用
 */

//  函数调用
function printProps(x) {
  console.log(x)
}
printProps({x: 1})

// 方法调用
let o = {
  name: 'may',
  age: 24,
  toString() {
    console.log(`${this.name}，${this.age}`);
  }
}
o.toString()
o["toString"]()

// 构造函数调用
class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
  toString() {
    console.log(`姓名：${this.name},年龄：${this.age}`)
  }
}
const person = new Person('may', 24, ['影月'])
person.toString()

// 间接调用
// call() apply()
// 隐式调用
