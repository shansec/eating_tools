function example(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase()
        y.toUpperCase()
    } else {
        console.log(x)
        console.log(y)
    }
}

interface Container {
    value: number | null | undefined
}

function multiplyValue(container: Container, factor: number) {
    if (container.value) {
        console.log(container.value)
        container.value *= factor
    }
}
