// 可选参数
function fn1(n: number = 100.23) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}

fn1(123.45)
// Cannot read properties of undefined (reading 'toFixed')
fn1()