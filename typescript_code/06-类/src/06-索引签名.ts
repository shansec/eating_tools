class MyClass {
  [s: string]: boolean | ((s: string) => boolean)
  // 类型“number”的属性“x”不能赋给“string”索引类型“boolean | ((s: string) => boolean)”。 
  // x: number = 10
  check(s: string): boolean {
    return this[s] as boolean
  }
}