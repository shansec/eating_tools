// TS7006: Parameter 'name' implicitly has an 'any' type.
// function greet(name): void {
//     console.log(`hello ${name}`)
// }
function greet(name: string): void {
    console.log(`hello ${name}`)
}

greet('may')
