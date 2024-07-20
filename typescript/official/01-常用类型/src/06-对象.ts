function printCoord(pt: {x: number, y: number}) {
    console.log(`坐标x值为: ${pt.x}`)
    console.log(`坐标y值为: ${pt.y}`)
}

printCoord({
    x: 3,
    y: 7
})

function printName(obj: {first: string, last?: string}) {
    console.log(obj.first + obj.last)
}

printName({
    first: '佩'
})
printName({
    first: '佩',
    last: '奇'
})
