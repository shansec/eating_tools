let [foo = true] = [];
console.log(foo);

let [x, y = 'b'] = ['a'];
console.log(x, y);

function f() {
  return 2;
}

let [z = f()] = [1]
console.log(z);

console.log('------------------------------');
