// function greet(person: { name: string, age: number }) {
//   return 'Hello' + person.name
// }

interface Person {
  name :string,
  age: number
}

function greet(person: Person) {
  return 'Hello' + person.name
}

// 类型别名
type Per = {
  name: string,
  age: number
}

function greetPer(person: Per) {
  return 'Hello' + person.name
}