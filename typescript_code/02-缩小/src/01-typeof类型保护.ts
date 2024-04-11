function printAll(strs: string | string[] | null) {
    if (typeof strs === 'object') {
        // TS2531: Object is possibly 'null'.
        // for (const s of strs) {
        //     console.log(s)
        // }
    } else if (typeof strs === 'string') {
        console.log(strs)
    } else {
        // .....
    }
}
