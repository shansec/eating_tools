// 使用 type 给定义类型别名
type Point = {
    x: number,
    y: number
}

function printCord(pt: Point) {

}

printCord({
    x: 200,
    y: 300
})

type ID = number | string

function printID(id: ID) {

}

printID('101')
printID(101)
