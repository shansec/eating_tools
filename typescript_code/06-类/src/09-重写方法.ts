class Base1 {
  greet() {
    console.log('Hello World');
    
  }
}

class Drive extends Base1 {
  greet(name?: string): void {
    if (name === undefined) {
      super.greet()
    } else {
      console.log(name.toUpperCase());
    }
  }
}

const d = new Drive()
d.greet()
d.greet('read')