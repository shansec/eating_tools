// 参数属性
class Params {
  constructor (public readonly x: number) {
    this.x = x
  }
}

const pa = new Params(100)
console.log(pa.x);
