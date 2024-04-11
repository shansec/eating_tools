interface Pt {
    x: string,
    y: string,
}

function printPt(pt: Pt) {
    console.log(pt.x + pt.y)
}

printPt({
    x: 'may',
    y: 'mengyao'
})

// 类型别名 和 interface 区别：
// interface 扩展接口 extends
interface Animal {
    name: string
}
interface Bear extends Animal {
    weight: number
}

const bear: Bear = {
    name: 'bear',
    weight: 100
}

// type 扩展
type Animal1 = {
    name: string
}

type Bear1 = Animal & {
    weight: string
}

const bear1: Bear1 = {
    name: '佩奇',
    weight: '100KG'
}

// 向现有类型添加字段
interface myWindows {
    count: string
}
interface myWindows {
    title: string
}

const windows: myWindows = {
    count: '100',
    title: 'title'
}

// 类型创建之后就不能通过同一个名称扩展
