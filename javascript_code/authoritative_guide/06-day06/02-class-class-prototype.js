// 类之类和原型
function range(from, to) {
  let o = Object.create(range.methods)

  o.from = from;
  o.to = to;

  return o;
}

range.methods = {
  /**
   * 如果 x 在范围内则返回 true, 否则返回 false
   * @returns 
   */
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  /**
   * 返回范围的字符表示
   * @returns 
   */
  toString() {
    return "(" + this.from + "..." + this.to + ")"
  },
  /**
   * 让类的实例可迭代
   */
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }
}
let r = range(1, 3)
console.log(r.includes(4))
console.log(r.toString())
console.log([...r])
