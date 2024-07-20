let x = Math.random() < 0.5 ? 10 : 'hello world'

// x: number
x = 1
console.log(x)

// x: string
x = 'goods'
console.log(x)

// TS2322: Type 'boolean' is not assignable to type 'string | number'.
// x = false
