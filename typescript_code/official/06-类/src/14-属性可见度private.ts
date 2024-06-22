class Base_private {
    private x = 0
    printX() {
        console.log(this.x)
    }
}

class Derived extends Base_private {
    showX() {
        // TS2341: Property 'x' is private and only accessible within class 'Base_private'.
        // console.log(this.x)
    }
}

const derived = new Derived()
// TS2341: Property 'x' is private and only accessible within class 'Base_private'.
// console.log(derived.x)
