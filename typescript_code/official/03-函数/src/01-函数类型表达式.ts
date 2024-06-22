type GreetFunc = (a: string) => void
function greeter(fn: GreetFunc) {
    fn('Hello')
}

function printToConsole(s: string) {
    console.log(s)
}

greeter(printToConsole)
