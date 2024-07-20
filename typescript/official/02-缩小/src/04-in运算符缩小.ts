type Fish = { swim: () => void }
type Bird = { fly: () => void }
type Human = { swim?: () => void; fly?: () => void}


function move(animal: Fish | Bird | Human) {
    if ('swim' in animal) {
        // return animal.swim()
        // 类型断言
        return (animal as Fish).swim()
    }
    // return animal.fly()
    // 类型断言
    return (animal as Bird).fly()
}
