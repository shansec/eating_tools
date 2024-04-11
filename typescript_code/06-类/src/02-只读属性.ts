class Greet {
  readonly name: string = 'world'

  constructor(name?: string) {
    if (name !== undefined) {
      this.name = name
    }
  }
}

const g = new Greet()
const g1 = new Greet('hello')