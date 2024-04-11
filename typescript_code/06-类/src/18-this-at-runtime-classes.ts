class MClass {
    name = 'myclass'
    getName = () => {
        return this.name
    }
}

const c = new MClass()
const obj = {
    name: 'obj',
    getName: c.getName
}
console.log(obj.getName())

// 默认情况下，this 的函数内部的值取决于函数的调用方式，在这个例子中函数是通过 obj 调用的，所以 this指向 obj，而不是类实例
