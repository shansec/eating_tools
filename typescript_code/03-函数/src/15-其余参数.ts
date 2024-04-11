function multiply(n: number, ...m: number[]) {
  return m.map((m) => n * m)
}

const mul = multiply(2, 1, 2, 3, 4)
console.log(mul)
