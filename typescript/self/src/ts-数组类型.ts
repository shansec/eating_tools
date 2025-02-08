const readonlyArrayOfWR = [1, 2, 3]
readonlyArrayOfWR[1] = 4
readonlyArrayOfWR.push(3)
// 只读数组  
const readonlyArrayA: readonly number[] = [1, 2, 3]
const readonlyArrayB: ReadonlyArray<number> = [1, 2]