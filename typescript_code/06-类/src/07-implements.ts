// interface Pingable {
//   ping(): void
// }

// class Sonar implements Pingable {

//   ping(): void {
//     console.log('ping');
//   }

// }

// class Ball implements Pingable {
//   ping() {

//   }
//   pong() {

//   }
// }

// interface A {}
// interface B {}

// class C implements A, B {

// }
interface Checkable {
  check(name: string): boolean
}

class NameCheck implements Checkable {
  check(name: string): boolean {
    return true
  }
}