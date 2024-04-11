// delete 操作符可以用来删除对象的属性
let data = {
  name: 'shansec',
  age: 23
}
console.log('删除属性之前', data);
delete data['age']
console.log('删除属性之后', data);

//  for/of
let data_array = [1, 2, 3, 4, 5], sum = 0;
for (let data of data_array) {
  sum += data;
}
console.log(sum);

// for/of 与对象
let o = { x: 1, y: 2, z: 3 }
let value = 0
for (let v of Object.values(o)) {
  value += v
}
console.log(value);

for (let k of Object.keys(o)) {
  console.log(k);
}

for (let [k, v] of Object.entries(o)) {
  console.log(k + '——>' + v);
}

// for/in 与for/of循环要求of后面必须是可迭代对象不同，for/in循环的in后面可以是任意对象。

