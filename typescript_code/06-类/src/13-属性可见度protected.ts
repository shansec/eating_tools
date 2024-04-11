class Greet_protected {
    public greet() {
        console.log(this.getName())
    }
    protected getName() {
        return 'hello'
    }
}

class SpecialGreet extends Greet_protected {
    public howdy() {
        console.log(this.getName())
    }
}
const specialGreet = new SpecialGreet()
specialGreet.howdy()
specialGreet.greet()
// TS2445: Property 'getName' is protected and only accessible within class 'Greet_protected' and its subclasses.
// specialGreet.getName()
