function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTime: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTime , d)
  } else {
    return new Date(mOrTime)
  }
}

const d1 = makeDate(12345678)
const d2 = makeDate(5, 6, 7)

// 没有需要 2 参数的重载，但存在需要 1 或 3 参数的重载。
// const d3 = makeDate(5,9)

const d3 = makeDate(5)