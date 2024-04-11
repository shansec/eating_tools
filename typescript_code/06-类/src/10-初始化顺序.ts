class Base_ {
  name = 'base'
  constructor() {
    console.log('My name is' + this.name);
  }
}

class Drives extends Base_ {
  name = 'drives'
  constructor() {
    super()
    console.log(this.name);
  }
}

const d1 = new Drives()

/**
 * 基类和派生类的初始化顺序
 *  - 基类的字段被初始化
 *  - 基类构造函数运行
 *  - 派生类的字段被初始化
 *  - 派生类构造函数运行
 */