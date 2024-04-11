// class C {
//   _length = 0

//   get length() {
//     return this._length
//   }

//   set length(value) {
//     this._length = value
//   }
// }

// const c = new C()
// // 此表达式不可调用。类型 "Number" 没有调用签名。
// // C.length()
// console.log(c.length);


class Thind {
  _size = 0

  get size(): number {
    return this._size
  }

  set size(value: string | number) {
    let num = Number(value)
    this._size = num
  }
}