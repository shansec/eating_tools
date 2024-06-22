// 类似于 js 的三元运算符
interface IdLabel {
  id: number
}

interface nameLabel {
  name: string
}

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): nameLabel;
// function createLabel(nameOrId: number| string): IdLabel | nameLabel;

type NameOrId<T extends number| string> = T extends number ? IdLabel : nameLabel

function createLabel<T extends number | string>(idName: T): NameOrId<T> {
  throw "unimplemented"
}

let a1 = createLabel('typescript')
let b1 = createLabel(3.1415)
let c1 = createLabel(Math.random() ? 'hello' : 42)
