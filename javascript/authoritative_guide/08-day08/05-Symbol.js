// 公认符号
const symbol1 = Symbol()
const symbol2 = Symbol(42)
const symbol3 = Symbol('foo')

console.log(typeof symbol1)
console.log(symbol2 == 42)
console.log(symbol3.toString())
console.log(Symbol('foo') == Symbol('foo'))


const symbol4 = Symbol('foo')
const symbol5 = Symbol('foo')
const symbol6 = Symbol('foo')
console.log(Symbol.for('foo'))
