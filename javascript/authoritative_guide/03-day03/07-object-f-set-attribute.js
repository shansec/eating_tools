// 对象之查找和设置属性
// 继承
let o = {}
o.x = 1
let p = Object.create(o)
p.y = 2
let q = Object.create(p)
q.z = 3
let f = q.toString()
console.log('f 的值', f)
console.log(q.x + q.z)

