// 构造签名
class Ctor {
    s: string
    constructor(s: string) {
        this.s = s
    }
}
type SomeConstructor = {
    new (s: string): Ctor
}

function fn(ctor: SomeConstructor) {
    return new ctor('hello')
}

const f = fn(Ctor)
console.log(f.s)


interface CallOrConstructor {
    new (s: string): Date
    (n?: number): number
}

function fn3(date: CallOrConstructor) {
    // 构造签名
    let d = new date('2023-3-6')
    // 调用签名
    let n = date(100)
}
