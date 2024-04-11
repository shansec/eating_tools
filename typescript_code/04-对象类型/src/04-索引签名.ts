interface StringArray {
  [index: number]: string
}

const myArray: StringArray = ['a', 'b', 'c']
const secondItem = myArray[0]

interface TestString {
  [props: string]: number
}

let testString: TestString = {
  x: 100,
  y: 200,
}