function printId(id: string | number) {
    console.log('Yours id is' + id);
}

printId('101')
printId(101)
// TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// printId(false)

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log('Hello,' + x.join(' and '));
    } else {
        console.log('Welcome lone traveler' + x);
    }
}

welcomePeople('A')
welcomePeople(['a', 'b'])


function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
}

getFirstThree([1, 2, 3, 4])
getFirstThree('abcdefg')
