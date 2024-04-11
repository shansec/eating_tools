interface someType {
  readonly prop: string
}

function doSomething(obj: someType) {
  console.log(obj.prop);
  // 无法为“prop”赋值，因为它是只读属性。
  // obj.prop = 'sss'
}

interface Home {
  readonly resident: {
    name: string,
    age: number
  }
}

function visitForBirthday(home: Home) {
  console.log(home.resident.name);
  home.resident.age++
}

// 无法为“resident”赋值，因为它是只读属性。
// function evict(home: Home) {
//   home.resident = {
//     name: 'may',
//     age: 18
//   }
// }

// 注意：只读属性只能作用于当前属性，不会向下传递

interface Person1 {
  name: string,
  age: number
}

interface ReadonlyPerson {
  readonly name: string,
  readonly age: number
}

let writeablePerson: Person1 = {
  name: 'may',
  age: 18
}
let readonlyPerson: ReadonlyPerson = writeablePerson