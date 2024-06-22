// 文字类型
let testString = 'Hello World'
testString = 'may'

const constantString = 'Hello World'
// Attempt to assign to const or readonly variable
// constantString = 'aaa'

function printText(s: string, alignment: 'left' | 'right' | 'center') {

}

// TS2345: Argument of type '"aaa"' is not assignable to parameter of type '"left" | "right" | "center"'.
// printText('hello', 'aaa')
printText('hello', 'left')

interface Options {
    width: number
}

function configure(x: Options | 'auto') {

}

configure({width : 100})
configure('auto')
