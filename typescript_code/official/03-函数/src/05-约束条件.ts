// 限制条件
function longest<Type extends {length: number}>(a: Type, b: Type) {
    if (a.length > b.length) {
        return a
    } else {
        return b
    }
}

// console.log(longest([1, 2], [4, 7, 10]));
