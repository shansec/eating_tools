function fn1(x: string): void

function fn1() {

}

fn1('Hello')


function fn1(x: string): void
function fn1(x: boolean): void
function fn1(x: string | boolean): string | boolean {
  return 'hello'
}