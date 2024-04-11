class Box<Type> {
    content: Type

    constructor(value: Type) {
        this.content = value
    }
    // TS2302: Static members cannot reference class type parameters.
    // static defaultVal: Type
}

const b: Box<string> = new Box('hello')
// TS2322: Type 'number' is not assignable to type 'string'.
// b.content = 555
