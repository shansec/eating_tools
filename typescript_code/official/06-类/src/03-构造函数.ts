class Points {
  x: number;
  y: number;

  constructor(x: number = 1, y: number = 2) {
    this.x = x
    this.y = y
  }
}

const points = new Points()

console.log(points);

class Base {
  k = 4
}

class Driver extends Base {
  constructor() {
    // 派生类构造器中必须包含 super()
    super()
    console.log(this.k);

  }
}

// 构造函数和普通函数的区别
//  - 构造函数不能有类型参数
//  - 构造函数不能返回类型注释

