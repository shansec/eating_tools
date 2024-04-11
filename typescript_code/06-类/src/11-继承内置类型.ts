// 继承内置类型
class MsgError extends Error {
    constructor(m: string) {
        super();
        // 明确设置原型
        Object.setPrototypeOf(this, MsgError.prototype)
    }
    sayHello() {
        return 'hello' + this.message
    }
}

const msgError = new MsgError('hello')
console.log(msgError.sayHello());

