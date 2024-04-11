// ES6规定，子类必须在构造函数中调用super(),否则就会报错，因为子类自己的this对象，必须通过父类的构造函数完成塑造
//  得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。
class Foo {
  constructor() {
    console.log(1111)
  }
}

class Bar extends Foo {
  constructor() {
    super();
    console.log(222222)
  }
}

const bar = new Bar();
// 另一个需要注意的地方是，在子类的构造函数中，只有调用super()之后，才可以使用this关键字
// 不管子类有没有定义构造函数，任何一个子类中都有一个构造函数

// 私有属性和私有方法的继承
// 子类无法继承父类的私有属性，私有属性只有在定义的class类中使用，但是子类可以调用父类定义的方法来获取父类的私有属性
class Foo1 {
  #p = 1;

  getP() {
    return this.#p;
  }
}

class Bar1 extends Foo1 {
  constructor() {
    super();
    console.log(this.getP());
  }
}

let bar1 = new Bar1();

// 静态属性和静态方法的继承
// 父类的静态属性和静态方法会被子类继承,静态属性时通过软拷贝实现继承的
class A {
  static hello() {
    console.log('A');
  }
}

class B extends A {
}

B.hello();

// Super关键字

// 类的prototype属性和__proto__属性
// class作为构造函数的语法糖，具有prototype属性和__proto__属性两条继承链
// 子类的__proto__属性，表示构造函数的继承，总是指向父类
// 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性
class C {
}

class D extends C {
}

console.log(D.__proto__ === C);
console.log(D.prototype.__proto__ === C.prototype);

// 原生构造函数的继承
