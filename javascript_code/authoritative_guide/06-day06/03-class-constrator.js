// 类之类和构造函数
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  /**
 * 如果 x 在范围内则返回 true, 否则返回 false
 * @returns 
 */
  includes(x) {
    return this.from <= x && x <= this.to;
  }
  /**
   * 返回范围的字符表示
   * @returns 
   */
  toString() {
    return "(" + this.from + "..." + this.to + ")"
  }
  /**
   * 让类的实例可迭代
   */
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }
}
let r = new Range(1, 5);
console.log(r.includes(3));
