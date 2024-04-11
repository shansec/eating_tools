class Greet1 {
    public greet() {
        console.log('hi!')
    }
    public sayHello() {
        this.greet()
    }
}

class Hello extends Greet1 {
    constructor() {
        super()
        this.greet()
    }
}

const greet1 = new Greet1()
greet1.greet()
greet1.sayHello()
