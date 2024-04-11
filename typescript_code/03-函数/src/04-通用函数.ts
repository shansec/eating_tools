// function firstElement(arr: any[]) {
//     return arr[0]
// }

// 改造
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}

firstElement(['1', '2', '3'])

function map<I, O>(arr: I[], func: (arg: I) => O): O[] {
    return arr.map(func)
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n))

console.log(parsed)
