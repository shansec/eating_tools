function printAllV2(strings: string | string[] | null) {
    // strings 真值转换
    if (strings && typeof strings === 'object') {
        for (const s of strings) {
            console.log(s)
        }
    } else if (typeof strings === 'string') {
        console.log(strings)
    } else {
        // ....
    }
}

function multiplyAll(values: number[] | undefined, factor: number) {
    if (!values) {
        return values
    } else {
        return values.map((x) => {
            return x * factor
        })
    }
}

console.log(multiplyAll([1, 2, 3, 4], 5))
